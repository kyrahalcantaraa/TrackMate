import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LostItemsInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lostItemsInfo}>
      <Image
        style={[styles.pinkCloudHi2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-21.png")}
      />
      <Text style={[styles.lostItems, styles.back1Typo]}>Lost Items</Text>
      <Image
        style={[styles.image47Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-47.png")}
      />
      <Text style={[styles.iphone14Pro, styles.back1Typo]}>iPhone 14 pro</Text>
      <Text
        style={[styles.ownerShanelAlcantaraLocati, styles.ownerTypo]}
      >{`Owner: Shanel Alcantara Location lost: Westpoint Blacktown
When: 15/04/2024`}</Text>
      <Pressable
        style={styles.lostItemsInfoChild}
        onPress={() => navigation.navigate("Message")}
      />
      <Text style={[styles.messageOwnerIf, styles.ownerTypo]}>
        Message owner if you found it
      </Text>
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("LostItems")}
      >
        <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
      </Pressable>
      <Image
        style={styles.pinkCloudHi2Icon1}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 262,
    position: "absolute",
  },
  back1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  ownerTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  backPosition: {
    top: 190,
    position: "absolute",
  },
  pinkCloudHi2Icon: {
    top: -72,
    left: -181,
    width: 341,
  },
  lostItems: {
    left: 139,
    width: 137,
    height: 24,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    top: 190,
    position: "absolute",
  },
  image47Icon: {
    top: 234,
    left: 66,
    width: 246,
  },
  iphone14Pro: {
    top: 504,
    fontSize: FontSize.size_5xl,
    left: 48,
    position: "absolute",
  },
  ownerShanelAlcantaraLocati: {
    top: 541,
    left: 48,
  },
  lostItemsInfoChild: {
    top: 637,
    left: 50,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorHotpink_100,
    width: 264,
    height: 32,
    position: "absolute",
  },
  messageOwnerIf: {
    top: 644,
    left: 82,
  },
  back1: {
    width: 48,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  back: {
    left: 30,
  },
  pinkCloudHi2Icon1: {
    top: 676,
    left: 236,
    width: 156,
    height: 168,
    position: "absolute",
  },
  lostItemsInfo: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LostItemsInfo;
