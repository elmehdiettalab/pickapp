import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as colors from "../constants/colors";
import { useFonts } from "expo-font";
// import * as firebase from "firebase";
// import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

const PhoneScreen = () => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const recaptchaVerifier = useRef(null);
  let [fontsLoaded] = useFonts({
    Book: require("../assets/fonts/Gotham-Book.otf"),
    Light: require("../assets/fonts/Gotham-Light.otf"),
    Medium: require("../assets/fonts/Gotham-Medium.otf"),
    Thin: require("../assets/fonts/Gotham-Thin.otf"),
    Ultra: require("../assets/fonts/Gotham-Ultra.otf"),
  });

//   signInWithPhoneNumber = (phoneNumber) => {
//     const phoneProvider = new firebase.auth.PhoneAuthProvider();
//     phoneProvider
//       .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
//       .then((res) => {
//         // this.setState({ confirm: res });
//         setConfirm(res);
//         // this.props.navigation.navigate("VerifyOTP", {
//         //   confirm: this.state.confirm,
//         //   phoneNumber: this.state.phoneNumber
//         // });
//         console.log("Code Sent!");
//       });
//   };
  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.viewContainer}>
        {/* <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebase.app().options}
          attemptInvisibleVerification={true}
        /> */}
        <View style={styles.viewHeader}>
          <TouchableOpacity style={styles.btnLeft}>
            <Entypo name="chevron-left" size={24} color={colors.offwhite} />
          </TouchableOpacity>
          <View style={styles.viewTitleHeader}>
            <Text style={styles.txtTitle}>Phone Number</Text>
          </View>
          <View style={styles.viewNext}>
            <TouchableOpacity style={styles.btnNext}>
              <Text style={styles.txtNext}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ************************************************************************************************ */}
        {/* ************************************************************************************************ */}

        <View style={styles.viewBodyPhone}>
          <TextInput
            autoCapitalize="none"
            keyboardType="number-pad"
            placeholder="Enter Phone Number"
            style={styles.inputPhone}
          />
          <Text style={styles.txtDesc}>
            We need your phone number so we can give you updates on your moves.
          </Text>
        </View>
      </View>
    );
  }
};

export default PhoneScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.red,
    padding: 40,
  },
  viewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  txtTitle: {
    fontFamily: "Ultra",
    fontSize: 16,
    color: colors.offwhite,
  },
  txtNext: {
    fontFamily: "Ultra",
    color: colors.offwhite,
    fontSize: 12,
  },
  inputPhone: {
    width: "100%",
    backgroundColor: colors.offwhite,
    borderRadius: 3,
    height: 47,
    padding: 10,
    fontFamily: "Medium",
  },
  viewBodyPhone: {
    height: 400,
    justifyContent: "center",
  },
  txtDesc: {
    fontFamily: "Medium",
    fontSize: 12,
    marginTop: 20,
    textAlign: "center",
    color: colors.offwhite,
  },
});
