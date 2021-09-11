import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

import Chat from "./components/Chat";
import Start from "./components/Start";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Start" component={Start} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
