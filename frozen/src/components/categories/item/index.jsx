import { TouchableOpacity, ImageBackground, Text } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ id, name, backgroundImage, onSelectCategory, style }) => {
  return (
    <TouchableOpacity onPress={() => onSelectCategory(id)} style={styles.container}>
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
