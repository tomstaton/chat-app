import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Chat extends Component {
  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }
  render() {
    let bgColor = this.props.route.params.bgColor;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor,
        }}
      >
        <Text>Chat Screen</Text>
      </View>
    );
  }
}
