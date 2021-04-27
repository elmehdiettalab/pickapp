import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as colors from "../constants/colors";
import phone_call from "../assets/phone_call.png";
import towing from "../assets/towing.png";
import couch from "../assets/couch.png";
import unboxing from "../assets/unboxing.png";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";

const carousselItems = [
  {
    avatar: couch,
    title: "Push a button. Get anything moved.",
    description:
      "Get new furniture delivered within an hour or move into your new place when it works best for you",
  },
  {
    avatar: towing,
    title: "Don't lift a finger. We do the work.",
    description:
      "Get new furniture delivered within an hour or move into your new place when it works best for you",
  },
  {
    avatar: unboxing,
    title: "All your stuff completely covered.",
    description:
      "Get new furniture delivered within an hour or move into your new place when it works best for you",
  },
];

const GetStartedScreen = (props) => {
  let [fontsLoaded] = useFonts({
    Book: require("../assets/fonts/Gotham-Book.otf"),
    Light: require("../assets/fonts/Gotham-Light.otf"),
    Medium: require("../assets/fonts/Gotham-Medium.otf"),
    Thin: require("../assets/fonts/Gotham-Thin.otf"),
    Ultra: require("../assets/fonts/Gotham-Ultra.otf"),
  });

  const [currentItem, setCurrentItem] = useState(0);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Pickup</Text>
        </View>
        <View style={styles.viewCaroussel}>
          <View style={styles.viewImg}>
            <Image
              source={carousselItems[currentItem].avatar}
              style={styles.imgPhoneCall}
            />
          </View>
          <View style={styles.viewTitleCaroussel}>
            <Text style={styles.txt1}>{carousselItems[currentItem].title}</Text>
          </View>
          <View style={styles.viewDescCaroussel}>
            <Text style={styles.txt2}>
              {carousselItems[currentItem].description}
            </Text>
          </View>
        </View>

        <View style={styles.viewButtons}>
          <View style={styles.viewSlider}>
            <TouchableOpacity
              style={styles.btnLeft}
              onPress={() => {
                if (currentItem !== 0) setCurrentItem(currentItem - 1);
              }}
            >
              <Entypo name="chevron-left" size={24} color={colors.offwhite} />
            </TouchableOpacity>

            <View style={styles.viewGroupDots}>
              <View
                style={
                  currentItem === 0 ? styles.viewDot : styles.viewOutlineDot
                }
              />
              <View
                style={
                  currentItem === 1 ? styles.viewDot : styles.viewOutlineDot
                }
              />
              <View
                style={
                  currentItem === 2 ? styles.viewDot : styles.viewOutlineDot
                }
              />
            </View>
            <TouchableOpacity
              style={styles.btnRight}
              onPress={() => {
                if (currentItem !== 2) setCurrentItem(currentItem + 1);
              }}
            >
              <Entypo name="chevron-right" size={24} color={colors.offwhite} />
            </TouchableOpacity>
          </View>

          <View style={styles.viewBtnGetStarted}>
            <TouchableOpacity style={styles.btnGetStarted} onPress={() => props.navigation.navigate('phone')}>
              <Text style={styles.txtGetStarted}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.red,
    padding: 20,
  },
  viewTitle: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
  },
  txtTitle: {
    fontSize: 30,
    // fontWeight: "600",
    fontFamily: "Ultra",
    color: colors.offwhite,
  },
  viewCaroussel: {
    flex: 5,
    // backgroundColor: colors.purple,
    width: "100%",
  },
  viewImg: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, 
    marginTop: 20
  },
  imgPhoneCall: {
    width: 280,
    height: 150
  },

  viewTitleCaroussel: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  txt1: {
    fontSize: 40,
    fontFamily: "Ultra",
    color: colors.offwhite,
  },
  viewDescCaroussel: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  txt2: {
    fontSize: 14,
    fontFamily: "Light",
    color: colors.offwhite,
    lineHeight: 20,
  },
  viewButtons: {
    flex: 1,
    // backgroundColor: colors.offwhite,
  },
  viewSlider: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnLeft: {
    width: 100,
  },
  btnRight: {
    width: 100,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  viewGroupDots: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 50,
  },
  viewDot: {
    width: 10,
    height: 10,
    backgroundColor: colors.offwhite,
    borderRadius: 10 / 2,
  },
  viewOutlineDot: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: colors.offwhite,
    borderRadius: 10 / 2,
  },
  btnGetStarted: {
    backgroundColor: colors.offwhite,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  viewBtnGetStarted: {
    marginTop: 15,
  },
  txtGetStarted: {
    fontFamily: "Medium",
  },
});
