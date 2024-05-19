import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Message3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.message4}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-2.png")}
      />
      <Text style={[styles.message, styles.messageTypo]}>Message</Text>
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("LostItemsInfo3")}
      >
        <Text style={[styles.back1, styles.messageTypo]}>Back</Text>
      </Pressable>
      <Image
        style={styles.pinkCloudHi2Icon1}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-1.png")}
      />
      <View style={[styles.message4Child, styles.message4Border]} />
      <Pressable style={[styles.message4Item, styles.message4Border]} />
      <Text style={[styles.typeYourMessage, styles.messageTypo]}>
        Type your message here...
      </Text>
      <Image
        style={styles.iconChevronRight}
        contentFit="cover"
        source={require("../assets/-icon-chevron-right1.png")}
      />
      <Image
        style={styles.image49Icon}
        contentFit="cover"
        source={require("../assets/image-49.png")}
      />
      <Text style={[styles.hello, styles.messageTypo]}>Hello!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  backPosition: {
    top: 190,
    position: "absolute",
  },
  message4Border: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  pinkCloudHi2Icon: {
    top: -72,
    left: -181,
    width: 341,
    height: 262,
    position: "absolute",
  },
  message: {
    left: 139,
    width: 137,
    height: 24,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
    top: 190,
    position: "absolute",
  },
  back1: {
    width: 48,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
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
  message4Child: {
    top: 234,
    backgroundColor: Color.colorSnow,
    width: 333,
    height: 422,
    left: 30,
  },
  message4Item: {
    top: 611,
    left: 53,
    width: 285,
    height: 31,
    backgroundColor: Color.colorWhite,
  },
  typeYourMessage: {
    top: 617,
    left: 69,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  iconChevronRight: {
    height: "1.78%",
    width: "4.86%",
    top: "73.34%",
    right: "15.65%",
    bottom: "24.88%",
    left: "79.49%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image49Icon: {
    top: 534,
    left: 205,
    width: 145,
    height: 60,
    position: "absolute",
  },
  hello: {
    top: 549,
    left: 261,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  message4: {
    width: 393,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Message3;
