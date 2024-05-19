import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountCreatedSuccessfullyParent}>
      <Text style={[styles.accountCreatedSuccessfully, styles.logInTypo]}>
        Account created successfully
      </Text>
      <Pressable
        style={[styles.frameChild, styles.logInPosition]}
        onPress={() => navigation.navigate("LogIn")}
      />
      <Text style={[styles.logIn, styles.logInPosition]}>Log-in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logInTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  logInPosition: {
    top: 132,
    position: "absolute",
  },
  accountCreatedSuccessfully: {
    top: 47,
    left: 9,
    width: 276,
    height: 29,
    position: "absolute",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  frameChild: {
    left: 71,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorHotpink_100,
    width: 151,
    height: 31,
  },
  logIn: {
    left: 113,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  accountCreatedSuccessfullyParent: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 292,
    height: 199,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame1;
