import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainApp from "./MainApp";
// import * as firebase from "firebase";
// import { firebaseConfig } from "./src/config/Fire";

// Initialize Firebase

// if (!firebase.apps.length) {
//   try {
//     firebase.initializeApp(firebaseConfig);
//   } catch (err) {
//     console.log(err);
//   }
// }

export default function App() {
  return <MainApp />;
}

