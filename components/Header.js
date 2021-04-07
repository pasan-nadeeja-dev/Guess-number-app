import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colours from "../constants/colours";

const Header = (props) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colours.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 19,
    color: 'black'
  },
});

export default Header;
