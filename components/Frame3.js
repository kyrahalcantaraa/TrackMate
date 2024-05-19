import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame3 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.imageAttachedParent}>
      <Text
        style={[styles.imageAttached, styles.okTypo]}
      >{`Image Attached `}</Text>
      <Pressable
        style={[styles.frameChild, styles.okPosition]}
        onPress={() => navigation.navigate("AddLostItem")}
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
  imageAttached: {
    top: 70,
    left: 15,
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
  ok: {
    left: 131,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  imageAttachedParent: {
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

export default Frame3;
