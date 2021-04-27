import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as colors from "../constants/colors";
import { useFonts } from "expo-font";


const SplashScreen = (props) => {
  let [fontsLoaded] = useFonts({
    "Book": require("../assets/fonts/Gotham-Book.otf"),
    "Light": require("../assets/fonts/Gotham-Light.otf"),
    "Medium": require("../assets/fonts/Gotham-Medium.otf"),
    "Thin": require("../assets/fonts/Gotham-Thin.otf"),
    "Ultra": require("../assets/fonts/Gotham-Ultra.otf"),
  });
  useEffect(() => {
    const a = setTimeout(() => {
      props.navigation.navigate("getstarted");
    }, 2000);

    () => {
      clearTimeout(a);
    };
  }, []);
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.viewCentral}>
          <Text style={styles.txtTitle}>Pickup</Text>
          <Text style={styles.txtDesc}>We move anything.</Text>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.red,
  },
  viewCentral: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle: {
    fontSize: 80,
    // fontWeight: "800",
    fontFamily: "Ultra",
    color: colors.offwhite,
  },
  txtDesc: {
    fontSize: 15,
    fontFamily: "Light",
    color: colors.offwhite,
  },
});

export default SplashScreen;
