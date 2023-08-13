import { TouchableOpacity, ImageBackground, Text } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory, style }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={[styles.imageBackground, style]}
        resizeMode="cover">
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryItem;
