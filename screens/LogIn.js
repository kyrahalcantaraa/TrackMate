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
import { Button } from "@rneui/themed";
import FrameComponent from "../components/FrameComponent";
import { useNavigation } from "@react-navigation/native";
import Frame from "../components/Frame";
import Frame2 from "../components/Frame2";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LogIn = () => {
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const [
    cac7f6edc4a990bc31773f9dac53baIconVisible,
    setCac7f6edc4a990bc31773f9dac53baIconVisible,
  ] = useState(false);
  const [image1IconVisible, setImage1IconVisible] = useState(false);

  const openForgotPassword = useCallback(() => {
    setForgotPasswordVisible(true);
  }, []);

  const closeForgotPassword = useCallback(() => {
    setForgotPasswordVisible(false);
  }, []);

  const openCac7f6edc4a990bc31773f9dac53baIcon = useCallback(() => {
    setCac7f6edc4a990bc31773f9dac53baIconVisible(true);
  }, []);

  const closeCac7f6edc4a990bc31773f9dac53baIcon = useCallback(() => {
    setCac7f6edc4a990bc31773f9dac53baIconVisible(false);
  }, []);

  const openImage1Icon = useCallback(() => {
    setImage1IconVisible(true);
  }, []);

  const closeImage1Icon = useCallback(() => {
    setImage1IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.logIn}>
        <Image
          style={styles.trackmate11}
          contentFit="cover"
          source={require("../assets/trackmate-1-11.png")}
        />
        <Text style={[styles.logIn1, styles.logFlexBox]}>Log-in</Text>
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
        <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
        <Button
          title="Forgot Password?"
          radius="5"
          iconPosition="left"
          type="clear"
          color="#000"
          titleStyle={styles.forgotPasswordBtn}
          onPress={openForgotPassword}
          containerStyle={styles.forgotPasswordBtn1}
          buttonStyle={styles.forgotPasswordBtn2}
        />
        <Text style={[styles.orLogInWith, styles.frame1Typo]}>
          or Log-in with
        </Text>
        <TextInput style={[styles.frame, styles.frameLayout1]} 
         placeholder="********"
         placeholderTextColor="#9a9a9a"
         />
        <TextInput
          style={[styles.frame1, styles.frameLayout1]}
          placeholder="kyrahalcantara"
          placeholderTextColor="#9a9a9a"
        />
        <Pressable style={[styles.frame2, styles.frameLayout]}>
          <Pressable
            style={[styles.frameChild, styles.frameLayout]}
            onPress={() => navigation.navigate("HomePage")}
          />
          <Text style={[styles.logIn2, styles.logFlexBox]}>Log-in</Text>
        </Pressable>
        <Image
          style={styles.pinkCloudHi1Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-1.png")}
        />
        <Pressable
          style={[styles.cac7f6edc4a990bc31773f9dac53ba, styles.image1Position]}
          onPress={openCac7f6edc4a990bc31773f9dac53baIcon}
        >
          <Image
            style={[styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/cac7f6edc4a990bc31773f9dac53baf4-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image1, styles.image1Position]}
          onPress={openImage1Icon}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </Pressable>
        <Button
          title="No account yet? Sign-up here!"
          radius="5"
          iconPosition="left"
          type="clear"
          color="#000"
          titleStyle={styles.noAccountYetBtn}
          onPress={() => navigation.navigate("Register")}
          containerStyle={styles.noAccountYetBtn1}
          buttonStyle={styles.noAccountYetBtn2}
        />
      </View>

      <Modal animationType="fade" transparent visible={forgotPasswordVisible}>
        <View style={styles.forgotPasswordOverlay}>
          <Pressable
            style={styles.forgotPasswordBg}
            onPress={closeForgotPassword}
          />
          <FrameComponent onClose={closeForgotPassword} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={cac7f6edc4a990bc31773f9dac53baIconVisible}
      >
        <View style={styles.cac7f6edc4a990bc31773f9dac53baIconOverlay}>
          <Pressable
            style={styles.cac7f6edc4a990bc31773f9dac53baIconBg}
            onPress={closeCac7f6edc4a990bc31773f9dac53baIcon}
          />
          <Frame onClose={closeCac7f6edc4a990bc31773f9dac53baIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={image1IconVisible}>
        <View style={styles.image1IconOverlay}>
          <Pressable style={styles.image1IconBg} onPress={closeImage1Icon} />
          <Frame2 onClose={closeImage1Icon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPasswordBtn: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Itim-Regular",
  },
  forgotPasswordBtn1: {
    left: 130,
    top: 555,
    position: "absolute",
  },
  forgotPasswordBtn2: {},
  noAccountYetBtn: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Itim-Regular",
  },
  noAccountYetBtn1: {
    left: 30,
    top: 730,
    position: "absolute",
  },
  noAccountYetBtn2: {},
  logFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  usernameTypo: {
    height: 24,
    width: 115,
    fontSize: FontSize.size_xl,
    left: 41,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  frame1Typo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.itimRegular,
  },
  frameLayout1: {
    height: 26,
    width: 256,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 34,
    width: 155,
    position: "absolute",
  },
  image1Position: {
    height: 39,
    top: 656,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  trackmate11: {
    top: 80,
    left: 98,
    width: 194,
    height: 195,
    position: "absolute",
  },
  logIn1: {
    top: 288,
    left: 147,
    fontSize: FontSize.size_13xl,
    width: 96,
    height: 50,
    fontFamily: FontFamily.itimRegular,
    color: Color.colorBlack,
  },
  username: {
    top: 345,
  },
  password: {
    top: 416,
  },
  forgotPasswordOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  forgotPasswordBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  orLogInWith: {
    top: 626,
    left: 143,
    width: 113,
    height: 25,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frame: {
    top: 450,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.itimRegular,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frame1: {
    top: 370,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.itimRegular,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorHotpink_200,
    borderRadius: Border.br_26xl,
  },
  logIn2: {
    top: 2,
    left: 44,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.itimRegular,
    color: Color.colorBlack,
  },
  frame2: {
    top: 506,
    left: 107,
    overflow: "hidden",
  },
  pinkCloudHi1Icon: {
    top: 676,
    left: 234,
    width: 156,
    height: 168,
    position: "absolute",
  },
  cac7f6edc4a990bc31773f9dac53baIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  cac7f6edc4a990bc31773f9dac53baIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    borderRadius: Border.br_26xl,
  },
  cac7f6edc4a990bc31773f9dac53ba: {
    left: 134,
    width: 43,
  },
  image1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  image1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  image1: {
    left: 202,
    width: 38,
  },
  logIn: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LogIn;
