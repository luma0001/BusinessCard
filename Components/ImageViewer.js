// We need to import IMAGE from react native
import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 600,
    height: 300,
    borderRadius: 10,
  },
});
