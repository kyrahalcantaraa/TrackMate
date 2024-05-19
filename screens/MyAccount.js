import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MyAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.myAccount, styles.myAccountLayout]}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-21.png")}
      />
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Pressable
        style={styles.image6}
        onPress={() => navigation.navigate("MyProfile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
      </Pressable>
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Text style={styles.myAccount1}>My Account</Text>
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Pressable
        style={[styles.back1, styles.backPosition]}
        onPress={() => navigation.navigate("MyProfile")}
      >
        <Text style={styles.backTypo}>Back</Text>
      </Pressable>
      <Image
        style={styles.image12Icon}
        contentFit="cover"
        source={require("../assets/image-17.png")}
      />
      <Pressable
        style={styles.image12Icon}
        onPress={() => navigation.navigate("FoundItems")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
      </Pressable>
      <Text style={[styles.myNameKyrahContainer, styles.containerTypo]}>
        <Text style={styles.myName}>{`My Name
`}</Text>
        <Text style={styles.kyrahNicoleAlcantara}>{`Kyrah Nicole Alcantara
`}</Text>
      </Text>
      <View style={[styles.myAccountChild, styles.accountLayout]} />
      <Text
        style={[
          styles.emailAddressAlcantarakyrahgContainer,
          styles.containerTypo,
        ]}
      >
        <Text style={styles.myName}>{`Email Address
`}</Text>
        <Text style={styles.alcantarakyrahgmailcom}>{`alcantarakyrah@gmail.com
`}</Text>
      </Text>
      <View style={[styles.myAccountItem, styles.accountLayout]} />
      <Text
        style={[styles.mobileNumber0412345678, styles.containerTypo]}
      >{`Mobile Number
0412345678
`}</Text>
      <Image
        style={styles.myAccountInner}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Text
        style={[styles.homeAddressBlacktown, styles.containerTypo]}
      >{`Home Address
Blacktown, NSW`}</Text>
      <View style={[styles.lineView, styles.accountLayout]} />
      <View style={[styles.homeindicatorParent, styles.frameWrapperLayout]}>
        <View style={[styles.homeindicator, styles.frameChildLayout]}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
            <View style={styles.iconMobileSignalParent}>
              <Image
                style={styles.iconMobileSignal}
                contentFit="cover"
                source={require("../assets/icon--mobile-signal.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={styles.battery1Icon}
                contentFit="cover"
                source={require("../assets/battery-11.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.pinkCloudHi1Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-1.png")}
        />
        <Image
          style={[styles.trackmate11, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/trackmate-1-12.png")}
        />
        <Text style={[styles.newFoundItem, styles.doneTypo]}>
          New Found item added successfully!
        </Text>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <Text style={[styles.done, styles.textFlexBox]}>Done</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myAccountLayout: {
    height: 844,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  backTypo: {
    width: 54,
    height: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
  },
  backPosition: {
    top: 195,
    left: 26,
    position: "absolute",
  },
  containerTypo: {
    height: 63,
    width: 251,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  accountLayout: {
    height: 1,
    width: 348,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    position: "absolute",
  },
  frameWrapperLayout: {
    borderRadius: Border.br_26xl,
    width: 390,
    position: "absolute",
  },
  frameChildLayout: {
    height: 34,
    borderRadius: Border.br_26xl,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameChildPosition: {
    left: 117,
    position: "absolute",
  },
  doneTypo: {
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  pinkCloudHi2Icon: {
    top: -72,
    left: -181,
    width: 341,
    height: 262,
    position: "absolute",
  },
  image4Icon: {
    top: 723,
    left: 137,
    width: 47,
    height: 47,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image6: {
    left: 312,
    top: 715,
    width: 55,
    height: 55,
    position: "absolute",
  },
  image7Icon: {
    top: 717,
    width: 59,
    height: 59,
    left: 24,
    position: "absolute",
  },
  myAccount1: {
    top: 190,
    left: 139,
    width: 137,
    height: 24,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  back: {
    left: 26,
    top: 195,
    position: "absolute",
  },
  back1: {
    left: 26,
  },
  image12Icon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
  },
  myName: {
    color: Color.colorBlack,
  },
  kyrahNicoleAlcantara: {
    color: "#8b7676",
  },
  myNameKyrahContainer: {
    top: 245,
    left: 26,
  },
  myAccountChild: {
    top: 300,
    left: 19,
  },
  alcantarakyrahgmailcom: {
    color: "#6d6666",
  },
  emailAddressAlcantarakyrahgContainer: {
    top: 316,
    left: 24,
  },
  myAccountItem: {
    top: 371,
    left: 24,
  },
  mobileNumber0412345678: {
    top: 379,
    left: 25,
    color: Color.colorBlack,
  },
  myAccountInner: {
    top: 433,
    maxHeight: "100%",
    width: 347,
    left: 26,
    position: "absolute",
  },
  homeAddressBlacktown: {
    top: 442,
    color: Color.colorBlack,
    left: 24,
  },
  lineView: {
    top: 496,
    left: 22,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeindicator: {
    top: 810,
    left: 0,
    width: 390,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
  },
  iconMobileSignal: {
    width: 18,
    height: 12,
  },
  wifiIcon: {
    width: 17,
    marginLeft: 8,
    height: 12,
  },
  battery1Icon: {
    width: 28,
    height: 13,
    marginLeft: 8,
    overflow: "hidden",
  },
  iconMobileSignalParent: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  parent: {
    height: 46,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    flexDirection: "row",
    width: 390,
  },
  frameWrapper: {
    top: 38,
    left: -34,
    width: 390,
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
    color: Color.colorBlack,
  },
  frameChild: {
    top: 469,
    backgroundColor: Color.colorHotpink_100,
    width: 155,
    height: 34,
    borderRadius: Border.br_26xl,
  },
  done: {
    top: 471,
    left: 161,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  homeindicatorParent: {
    top: 869,
    left: -465,
    width: 390,
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
  myAccount: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyAccount;
