import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LosItemAdded = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.losItemAdded}>
      <Image
        style={styles.pinkCloudHi1Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-1.png")}
      />
      <Image
        style={[styles.trackmate11, styles.trackmate11Position]}
        contentFit="cover"
        source={require("../assets/trackmate-1-12.png")}
      />
      <Text style={[styles.newLostItem, styles.done1Clr]}>
        New Lost item added successfully!
      </Text>
      <Pressable
        style={[styles.losItemAddedChild, styles.trackmate11Position]}
      />
      <Pressable
        style={styles.done}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.done1, styles.done1Clr]}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  trackmate11Position: {
    left: 117,
    position: "absolute",
  },
  done1Clr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  pinkCloudHi1Icon: {
    top: 676,
    left: 234,
    width: 156,
    height: 168,
    position: "absolute",
  },
  trackmate11: {
    top: 110,
    width: 144,
    height: 144,
  },
  newLostItem: {
    top: 326,
    left: 44,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    width: 301,
    height: 96,
    position: "absolute",
  },
  losItemAddedChild: {
    top: 469,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorHotpink_100,
    width: 155,
    height: 34,
  },
  done1: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  done: {
    left: 161,
    top: 471,
    position: "absolute",
  },
  losItemAdded: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LosItemAdded;
