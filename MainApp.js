import 'react-native-gesture-handler';
import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import Constants from "expo-constants";
import SplashScreen from "./src/screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GetStartedScreen from "./src/screens/GetStartedScreen";
import PhoneScreen from './src/screens/PhoneScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
       <StatusBar hidden={true}  /> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="getstarted"
            component={GetStartedScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="phone"
            component={PhoneScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <SplashScreen /> */}
    </View>
  );
};

export default MainApp;
