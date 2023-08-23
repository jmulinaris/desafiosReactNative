import { Ionicons } from '@expo/vector-icons';
import { requestCameraPermissionsAsync, launchCameraAsync } from 'expo-image-picker';
import { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';

import styles from './styles';
import { COLORS } from '../../themes';

const ImageSelector = ({ profileImage, onSelect }) => {
  const [image, setImage] = useState(null);
  const verifyPermission = async () => {
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'You need to grant camera permissions to use this app', [
        { text: 'OK' },
      ]);
      return false;
    }
    return true;
  };

  const onHandleTakePhoto = async () => {
    const isCameraPermission = await verifyPermission();
    if (!isCameraPermission) return;
    const result = await launchCameraAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
      base64: true,
    });

    await onSelect({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
    setImage(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onHandleTakePhoto}>
        {profileImage || image ? (
          <Image
            source={{ uri: image || profileImage }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Ionicons name="ios-camera" size={26} color={COLORS.secondary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;
