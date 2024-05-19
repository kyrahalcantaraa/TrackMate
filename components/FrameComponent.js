import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.linkToResetYourPasswordSeParent}>
      <Text style={[styles.linkToReset, styles.doneTypo]}>
        Link to reset your password sent to your email
      </Text>
      <Pressable
        style={[styles.frameChild, styles.donePosition]}
        onPress={() => navigation.navigate("LogIn")}
      />
      <Text style={[styles.done, styles.donePosition]}>Done</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  doneTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  donePosition: {
    top: 140,
    position: "absolute",
  },
  linkToReset: {
    top: 27,
    left: 9,
    width: 276,
    height: 90,
    position: "absolute",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  frameChild: {
    left: 70,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorHotpink_100,
    width: 151,
    height: 31,
  },
  done: {
    left: 118,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  linkToResetYourPasswordSeParent: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 294,
    height: 199,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default FrameComponent;
