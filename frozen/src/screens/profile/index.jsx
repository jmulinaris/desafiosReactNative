import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import { ImageSelector } from '../../components';
import { useGetProfileQuery, useUpdateImageProfileMutation } from '../../store/settings/api';
import { COLORS } from '../../themes';

const Profile = () => {
  const localId = useSelector((state) => state.auth.user.localId);
  const [user, setUser] = useState();
  const [uploadImageProfile, { isLoading }] = useUpdateImageProfileMutation();
  const { data: userData } = useGetProfileQuery({ localId });
  const onHandlerImage = async ({ uri, base64 }) => {
    await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` });
  };

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageSelector profileImage={user?.profileImage} onSelect={onHandlerImage} />
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;
