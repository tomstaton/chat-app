import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// Set the Background Image
const backgroundImg = require("../assets/Background-Image.png");

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bgColor: "#757083",
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/Background-Image.png")}
        >
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Welcome!</Text>
          </View>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.namefield}
              placeholder="Your Name"
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            />
            <Text style={styles.text}>Select a Background Color:</Text>
            <View style={styles.colorsMenu}>
              <TouchableOpacity
                //#090C08; #474056; #8A95A5; #B9C6AE colors
                style={[styles.colors, styles.black]}
                onPress={() => this.setState({ bgColor: "#090C08" })}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colors, styles.purple]}
                onPress={() => this.setState({ bgColor: "#474056" })}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colors, styles.gray]}
                onPress={() => this.setState({ bgColor: "#8A95A5" })}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colors, styles.green]}
                onPress={() => this.setState({ bgColor: "#B9C6AE" })}
              ></TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  bgColor: this.state.bgColor,
                })
              }
            >
              <Text style={styles.text}>GO TO CHAT</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titleWrapper: {
    flex: 0.5,
    justifyContent: "space-evenly",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 45,
    fontWeight: "600",
  },
  text: {
    color: "#757083",
    fontSize: 16,
    fontWeight: "300",
    opacity: 100,
  },
  namefield: {
    backgroundColor: "#fff",
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
  },
  wrapper: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderColor: "#ffa500",
    borderWidth: 1,
    width: "88%",
    flex: 0.5,
    alignItems: "center",
    marginBottom: "8%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  colorsMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colors: {
    width: 45,
    height: 45,
    marginRight: 20,
    borderRadius: 45 / 2,
  },
  black: {
    backgroundColor: "#090C08",
  },
  purple: {
    backgroundColor: "#474056",
  },
  gray: {
    backgroundColor: "#8A95A5",
  },
  green: {
    backgroundColor: "#B9C6AE",
  },
  border: {
    borderWidth: 2,
    borderColor: "green",
  },
  button: {
    width: "80%",
    height: 50,
    color: "#FFFFFF",
    alignItems: "center",
    fontWeight: "600",
    justifyContent: "space-evenly",
    fontSize: 16,
    opacity: 100,
  },
});
