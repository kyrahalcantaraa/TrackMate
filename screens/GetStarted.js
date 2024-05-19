import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const GetStarted = () => {
  return (
    <View style={styles.getStarted}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-2.png")}
      />
      <View style={[styles.homeindicator, styles.homeindicatorLayout]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.getStartedInner, styles.homeindicatorLayout]}>
        <View style={styles.parent}>
          <Text style={styles.text}>9:41</Text>
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
              source={require("../assets/battery-1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.home}>Home</Text>
      <View style={[styles.getStartedChild, styles.getLayout]} />
      <Text style={[styles.iLostSomething, styles.somethingTypo]}>
        I lost something
      </Text>
      <View style={[styles.getStartedItem, styles.getLayout]} />
      <Text style={[styles.iFoundSomething, styles.somethingTypo]}>
        I found something
      </Text>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeindicatorLayout: {
    borderRadius: Border.br_26xl,
    left: 0,
    width: 390,
    position: "absolute",
  },
  getLayout: {
    height: 43,
    width: 252,
    backgroundColor: Color.colorHotpink_100,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  somethingTypo: {
    height: 32,
    width: 225,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  pinkCloudHi2Icon: {
    top: -72,
    left: -124,
    width: 341,
    height: 262,
    position: "absolute",
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
    height: 34,
    width: 390,
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    color: Color.colorBlack,
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
  getStartedInner: {
    top: 0,
    width: 390,
  },
  home: {
    top: 185,
    left: 148,
    fontSize: FontSize.size_13xl,
    width: 95,
    height: 37,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  getStartedChild: {
    top: 352,
    left: 75,
  },
  iLostSomething: {
    top: 358,
    left: 121,
  },
  getStartedItem: {
    top: 422,
    left: 77,
  },
  iFoundSomething: {
    top: 430,
    left: 107,
  },
  image4Icon: {
    top: 723,
    left: 137,
    width: 47,
    height: 47,
    position: "absolute",
  },
  image6Icon: {
    top: 715,
    left: 312,
    width: 55,
    height: 55,
    position: "absolute",
  },
  image7Icon: {
    top: 717,
    left: 24,
    width: 59,
    height: 59,
    position: "absolute",
  },
  getStarted: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    display: "none",
    overflow: "hidden",
  },
});

export default GetStarted;
