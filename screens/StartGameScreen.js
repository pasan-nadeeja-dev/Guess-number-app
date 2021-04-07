import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";

import colours from "../constants/colours";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen!</Text>
      <Card style={styles.inputContainer}>
        <Text>Input a number</Text>
        <Input style={styles.input} keyboardType="number-pad" maxLength={2} />
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button title="Reset" onPress={() => {}} color={colours.secondary}/>
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={colours.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: 100,
  },
  input: {
    width: 25,
    textAlign: "center"
  }
});

export default StartGameScreen;
