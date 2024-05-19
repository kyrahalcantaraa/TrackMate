import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.logInSuccessfullyViaEMaiParent}>
      <Text style={[styles.logInSuccessfullyVia, styles.okTypo]}>
        Log-in successfully via E-mail
      </Text>
      <Pressable
        style={[styles.frameChild, styles.okPosition]}
        onPress={() => navigation.navigate("HomePage")}
      />
      <Text style={[styles.ok, styles.okPosition]}>Ok</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  okTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  okPosition: {
    top: 132,
    position: "absolute",
  },
  logInSuccessfullyVia: {
    top: 47,
    left: 8,
    width: 276,
    height: 72,
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
  ok: {
    left: 131,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  logInSuccessfullyViaEMaiParent: {
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

export default Frame;
