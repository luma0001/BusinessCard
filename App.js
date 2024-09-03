import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// We import a new component
import ImageViewer from "./Components/ImageViewer";
// We import the Button component
import Button from "./Components/Button";

//why need to import it?
const PlaceholderImage = require("./assets/images/jysk.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      {/* Here is  the image view */}
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      {/* Here we use our button components */}
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>Lukas Maibom</Text>
        <Text style={styles.titleText}>Junior frontend developer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#123499",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 100,
    witdth: 100,
  },
  textContainer: {
    flex: 1 / 2,
    fontWeight: 500,
    alignItems: "center",
  },
  nameText: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 35,
  },
  titleText: {
    color: "#fff",
    fontWeight: 300,
    fontSize: 35,
  },
});
