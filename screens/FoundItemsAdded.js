import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FoundItemsAdded = () => {
  return (
    <View style={styles.foundItemsAdded}>
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
      <Text style={[styles.newFoundItem, styles.doneClr]}>
        New Found item added successfully!
      </Text>
      <Pressable
        style={[styles.foundItemsAddedChild, styles.trackmate11Position]}
      />
      <Text style={[styles.done, styles.doneClr]}>Done</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  trackmate11Position: {
    left: 117,
    position: "absolute",
  },
  doneClr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
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
  newFoundItem: {
    top: 326,
    left: 44,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    width: 301,
    height: 96,
  },
  foundItemsAddedChild: {
    top: 469,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorHotpink_100,
    width: 155,
    height: 34,
  },
  done: {
    top: 471,
    left: 161,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  foundItemsAdded: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default FoundItemsAdded;
