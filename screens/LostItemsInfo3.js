import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LostItemsInfo3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lostItemsInfo3}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-2.png")}
      />
      <Text style={[styles.lostItems, styles.back1Typo]}>Lost Items</Text>
      <Text style={[styles.coachWallet, styles.back1Typo]}>Coach Wallet</Text>
      <Text
        style={[styles.ownerMarkVillonesLocation, styles.ownerTypo]}
      >{`Owner: Mark Villones Location lost: Nandos Restaurant, Blacktown
When: 01/04/2024`}</Text>
      <Pressable
        style={styles.lostItemsInfo3Child}
        onPress={() => navigation.navigate("Message3")}
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
        style={styles.image48Icon}
        contentFit="cover"
        source={require("../assets/image-481.png")}
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
  coachWallet: {
    top: 504,
    fontSize: FontSize.size_5xl,
    left: 48,
    position: "absolute",
  },
  ownerMarkVillonesLocation: {
    top: 540,
    width: 200,
    left: 48,
  },
  lostItemsInfo3Child: {
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
  image48Icon: {
    top: 226,
    left: 47,
    width: 303,
    height: 266,
    position: "absolute",
  },
  lostItemsInfo3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LostItemsInfo3;
