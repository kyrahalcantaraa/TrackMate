import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Modal,
} from "react-native";
import Frame1 from "../components/Frame1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Register = () => {
  const [createAccountTextVisible, setCreateAccountTextVisible] =
    useState(false);

  const openCreateAccountText = useCallback(() => {
    setCreateAccountTextVisible(true);
  }, []);

  const closeCreateAccountText = useCallback(() => {
    setCreateAccountTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.register}>
        <Image
          style={styles.pinkCloudHi1Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-1.png")}
        />
        <Image
          style={styles.trackmate11}
          contentFit="cover"
          source={require("../assets/trackmate-1-1.png")}
        />
        <Text style={[styles.createAnAccount, styles.orTypo]}>
          Create an account
        </Text>
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
        <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
        <TextInput style={[styles.registerChild, styles.registerChildLayout]} />
        <TextInput style={[styles.registerItem, styles.registerChildLayout]} />
        <TextInput style={[styles.registerInner, styles.registerInnerLayout]} />
        <TextInput
          style={[styles.rectangleTextinput, styles.registerInnerLayout]}
        />
        <Text style={[styles.text, styles.orTypo]}>0412345678</Text>
        <TextInput
          style={[styles.registerChild1, styles.registerChildLayout]}
        />
        <Text style={[styles.kyrahalcantara, styles.text1Typo]}>
          kyrahalcantara
        </Text>
        <Text style={[styles.alcantarakyrahgmailcom, styles.text1Typo]}>
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.text1, styles.text1Typo]}>********</Text>
        <Pressable
          style={[styles.rectanglePressable, styles.registerChild2Bg]}
        />
        <Pressable
          style={[styles.createAccount, styles.createAccountPosition]}
          onPress={openCreateAccountText}
        >
          <Text style={styles.logInTypo}>Create Account</Text>
        </Pressable>
        <Text style={[styles.emailAddress, styles.emailAddressPosition]}>
          Email Address
        </Text>
        <Text style={[styles.mobileNumber, styles.emailAddressPosition]}>
          Mobile Number
        </Text>
        <Text style={[styles.homeAddress, styles.addressTypo]}>
          Home Address
        </Text>
        <Pressable
          style={[styles.registerChild2, styles.createAccountPosition]}
        />
        <Text style={[styles.logIn, styles.logInTypo]}>Log-in</Text>
        <Text style={[styles.or, styles.orTypo]}>or</Text>
        <Text style={[styles.blacktownNsw2148, styles.emailAddressPosition]}>
          Blacktown, NSW, 2148
        </Text>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={createAccountTextVisible}
      >
        <View style={styles.createAccountTextOverlay}>
          <Pressable
            style={styles.createAccountTextBg}
            onPress={closeCreateAccountText}
          />
          <Frame1 onClose={closeCreateAccountText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  orTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  usernameTypo: {
    height: 24,
    width: 115,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  registerChildLayout: {
    height: 26,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_26xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  registerInnerLayout: {
    left: 58,
    height: 26,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_26xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text1Typo: {
    color: Color.colorDarkgray_400,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  registerChild2Bg: {
    backgroundColor: Color.colorHotpink_100,
    borderRadius: Border.br_26xl,
  },
  createAccountPosition: {
    left: 110,
    position: "absolute",
  },
  emailAddressPosition: {
    left: 122,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  addressTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  logInTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
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
    top: 55,
    left: 130,
    width: 108,
    height: 107,
    position: "absolute",
  },
  createAnAccount: {
    top: 171,
    fontSize: FontSize.size_13xl,
    width: 301,
    height: 37,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    left: 59,
  },
  username: {
    top: 238,
    left: 138,
  },
  password: {
    top: 302,
    left: 139,
  },
  registerChild: {
    top: 262,
    left: 59,
  },
  registerItem: {
    top: 326,
    left: 56,
  },
  registerInner: {
    top: 388,
  },
  rectangleTextinput: {
    top: 458,
  },
  text: {
    top: 463,
    left: 148,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  registerChild1: {
    top: 524,
    left: 62,
  },
  kyrahalcantara: {
    top: 266,
    left: 138,
  },
  alcantarakyrahgmailcom: {
    top: 391,
    left: 114,
    textDecoration: "underline",
  },
  text1: {
    top: 334,
    left: 160,
  },
  rectanglePressable: {
    top: 580,
    left: 97,
    width: 186,
    height: 39,
    position: "absolute",
  },
  createAccountTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  createAccountTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  createAccount: {
    top: 583,
  },
  emailAddress: {
    top: 358,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  mobileNumber: {
    top: 430,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  homeAddress: {
    top: 493,
    left: 128,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  registerChild2: {
    top: 668,
    width: 155,
    height: 34,
    backgroundColor: Color.colorHotpink_100,
    borderRadius: Border.br_26xl,
  },
  logIn: {
    top: 670,
    left: 154,
    position: "absolute",
  },
  or: {
    top: 635,
    left: 175,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  blacktownNsw2148: {
    top: 528,
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_sm,
  },
  register: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Register;
