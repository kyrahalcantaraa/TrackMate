import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LostItemsInfo1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lostItemsInfo1}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-2.png")}
      />
      <Text style={[styles.lostItems, styles.back1Typo]}>Lost Items</Text>
      <Text style={[styles.asusLaptop, styles.back1Typo]}>Asus Laptop</Text>
      <Text
        style={[styles.ownerJenrickAbanaLocation, styles.ownerTypo]}
      >{`Owner: Jenrick Abana Location lost: KOI Library
When: 10/04/2024`}</Text>
      <Pressable
        style={styles.lostItemsInfo1Child}
        onPress={() => navigation.navigate("Message1")}
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
      <Image
        style={styles.b627c039f4148eb905fEded9e9Icon}
        contentFit="cover"
        source={require("../assets/8b627c039f4148eb905feded9e9bfd0f-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 262,
    position: "absolute",
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
  asusLaptop: {
    top: 504,
    fontSize: FontSize.size_5xl,
    left: 48,
    position: "absolute",
  },
  ownerJenrickAbanaLocation: {
    top: 540,
    width: 200,
    left: 48,
  },
  lostItemsInfo1Child: {
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
  b627c039f4148eb905fEded9e9Icon: {
    top: 233,
    left: 71,
    width: 230,
    height: 264,
    position: "absolute",
  },
  lostItemsInfo1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LostItemsInfo1;
