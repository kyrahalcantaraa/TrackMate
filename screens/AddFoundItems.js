import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame4 from "../components/Frame4";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AddFoundItems = () => {
  const [image44IconVisible, setImage44IconVisible] = useState(false);
  const navigation = useNavigation();

  const openImage44Icon = useCallback(() => {
    setImage44IconVisible(true);
  }, []);

  const closeImage44Icon = useCallback(() => {
    setImage44IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.addFoundItems}>
        <Image
          style={styles.pinkCloudHi2Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-2.png")}
        />
        <View style={[styles.homeindicator, styles.homeindicatorLayout]} />
        <View style={[styles.addFoundItemsChild, styles.homeindicatorLayout]} />
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image26Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.newItemLayout]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addFoundItemsItem, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsInner, styles.addChildLayout]} />
        <View style={[styles.rectangleView, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsChild1, styles.addChildLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addFoundItemsChild2, styles.addChildLayout]} />
        <Text style={[styles.laptop, styles.laptopTypo]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopTypo]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.laptopTypo]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.itemTypo]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.itemTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.whenDidYouPosition]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addFoundItemsChild3, styles.addChildLayout]} />
        <Text
          style={[
            styles.alcantarakyrahgmailcom,
            styles.alcantarakyrahgmailcomPosition,
          ]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.itemTypo]}>
          Email Address
        </Text>
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.pinkCloudHi2Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-2.png")}
        />
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image26Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.newItemLayout]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addFoundItemsItem, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsInner, styles.addChildLayout]} />
        <View style={[styles.rectangleView, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsChild1, styles.addChildLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addFoundItemsChild2, styles.addChildLayout]} />
        <Text style={[styles.laptop, styles.laptopTypo]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopTypo]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.laptopTypo]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.itemTypo]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.itemTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.whenDidYouPosition]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addFoundItemsChild3, styles.addChildLayout]} />
        <Text
          style={[
            styles.alcantarakyrahgmailcom,
            styles.alcantarakyrahgmailcomPosition,
          ]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.itemTypo]}>
          Email Address
        </Text>
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.pinkCloudHi2Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-2.png")}
        />
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image26Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.newItemLayout]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addFoundItemsItem, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsInner, styles.addChildLayout]} />
        <View style={[styles.rectangleView, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsChild1, styles.addChildLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addFoundItemsChild2, styles.addChildLayout]} />
        <Text style={[styles.laptop, styles.laptopTypo]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopTypo]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.laptopTypo]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.itemTypo]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.itemTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.whenDidYouPosition]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addFoundItemsChild3, styles.addChildLayout]} />
        <Text
          style={[
            styles.alcantarakyrahgmailcom,
            styles.alcantarakyrahgmailcomPosition,
          ]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.itemTypo]}>
          Email Address
        </Text>
        <Text style={[styles.uploadAnImage, styles.didClr]}>
          Upload an image of the found item
        </Text>
        <View style={[styles.image26, styles.image26Layout]} />
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.pinkCloudHi2Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-2.png")}
        />
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image26Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.newItemLayout]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addFoundItemsItem, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsInner, styles.addChildLayout]} />
        <View style={[styles.rectangleView, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsChild1, styles.addChildLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addFoundItemsChild2, styles.addChildLayout]} />
        <Text style={[styles.laptop, styles.laptopTypo]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopTypo]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.laptopTypo]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.itemTypo]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.itemTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.whenDidYouPosition]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addFoundItemsChild3, styles.addChildLayout]} />
        <Text
          style={[
            styles.alcantarakyrahgmailcom,
            styles.alcantarakyrahgmailcomPosition,
          ]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.itemTypo]}>
          Email Address
        </Text>
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.pinkCloudHi2Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-2.png")}
        />
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image26Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.newItemLayout]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addFoundItemsItem, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsInner, styles.addChildLayout]} />
        <View style={[styles.rectangleView, styles.addChildLayout]} />
        <View style={[styles.addFoundItemsChild1, styles.addChildLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addFoundItemsChild2, styles.addChildLayout]} />
        <Text style={[styles.laptop, styles.laptopTypo]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopTypo]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.laptopTypo]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.itemTypo]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.itemTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.whereDidYou, styles.didClr]}>
          Where did you found it?
        </Text>
        <Text style={[styles.whenDidYou, styles.whenDidYouPosition]}>
          When did you found it?
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.whenDidYouPosition]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addFoundItemsChild3, styles.addChildLayout]} />
        <Text
          style={[
            styles.alcantarakyrahgmailcom,
            styles.alcantarakyrahgmailcomPosition,
          ]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.itemTypo]}>
          Email Address
        </Text>
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <Image
          style={styles.pinkCloudHi2Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-2.png")}
        />
        <Pressable
          style={styles.addPosition}
          onPress={() => navigation.navigate("FoundItemsAdded")}
        >
          <Text style={styles.addTypo}>Add</Text>
        </Pressable>
        <Pressable
          style={styles.image4Icon}
          onPress={() => navigation.navigate("LostItems")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image6Icon, styles.image26Layout]}
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
        <Text style={[styles.newItem, styles.newItemLayout]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <TextInput style={[styles.addFoundItemsItem, styles.addChildLayout]} />
        <TextInput style={[styles.addFoundItemsInner, styles.addChildLayout]} />
        <TextInput style={[styles.rectangleView, styles.addChildLayout]} />
        <TextInput
          style={[styles.addFoundItemsChild1, styles.addChildLayout]}
        />
        <Text style={[styles.text, styles.textTypo]}>0449949803</Text>
        <TextInput
          style={[styles.addFoundItemsChild2, styles.addChildLayout]}
        />
        <TextInput
          style={[styles.addFoundItemsChild32, styles.addChildLayout]}
        />
        <Text style={[styles.text6, styles.textTypo]}>15/04/2024</Text>
        <Text style={[styles.laptop, styles.laptopTypo]}>Marshall Speaker</Text>
        <Text style={[styles.asusColorBlack, styles.laptopTypo]}>
          Small, color black
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.laptopTypo]}>
          Shanel Alcantara
        </Text>
        <Text style={[styles.yourName, styles.itemTypo]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.itemTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.whenDidYouPosition]}>
          Manly, Beach
        </Text>
        <TextInput
          style={[styles.addFoundItemsChild3, styles.addChildLayout]}
        />
        <Text style={styles.alcantarakyrahgmailcomPosition}>
          shanel.alcantara09@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.itemTypo]}>
          Email Address
        </Text>
        <Pressable style={styles.image44} onPress={openImage44Icon}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-44.png")}
          />
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
      </View>

      <Modal animationType="fade" transparent visible={image44IconVisible}>
        <View style={styles.image44IconOverlay}>
          <Pressable style={styles.image44IconBg} onPress={closeImage44Icon} />
          <Frame4 onClose={closeImage44Icon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  homeindicatorLayout: {
    width: 390,
    borderRadius: Border.br_26xl,
    left: 0,
    position: "absolute",
  },
  addTypo: {
    height: 29,
    width: 62,
    color: Color.colorHotpink_100,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  image26Layout: {
    width: 55,
    position: "absolute",
  },
  newItemLayout: {
    width: 115,
    height: 24,
  },
  itemTypo: {
    left: 33,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  addChildLayout: {
    height: 26,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 29,
    borderRadius: Border.br_26xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  laptopTypo: {
    color: Color.colorDarkgray_400,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  whenDidYouPosition: {
    left: 37,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  alcantarakyrahgmailcomPosition: {
    top: 442,
    color: Color.colorDarkgray_400,
    fontSize: FontSize.size_sm,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  didClr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  pinkCloudHi2Icon: {
    top: -72,
    left: -181,
    width: 341,
    height: 262,
    position: "absolute",
  },
  homeindicator: {
    top: 810,
    height: 34,
  },
  addFoundItemsChild: {
    top: 0,
    height: 46,
  },
  add: {
    left: 301,
    top: 201,
    position: "absolute",
  },
  image4Icon: {
    top: 723,
    left: 137,
    height: 47,
    width: 47,
    position: "absolute",
  },
  image6Icon: {
    top: 715,
    left: 312,
    height: 55,
  },
  image7Icon: {
    top: 717,
    left: 24,
    width: 59,
    height: 59,
    position: "absolute",
  },
  newItem: {
    top: 212,
    height: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  item: {
    top: 251,
    height: 24,
    width: 47,
  },
  details: {
    top: 311,
    height: 24,
    width: 115,
  },
  addFoundItemsItem: {
    top: 280,
  },
  addFoundItemsInner: {
    top: 336,
  },
  rectangleView: {
    top: 388,
  },
  addFoundItemsChild1: {
    top: 494,
  },
  text: {
    top: 499,
    left: 119,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_sm,
  },
  addFoundItemsChild2: {
    top: 546,
  },
  laptop: {
    top: 285,
    left: 43,
    color: Color.colorDarkgray_400,
  },
  asusColorBlack: {
    top: 340,
    left: 43,
    color: Color.colorDarkgray_400,
  },
  kyrahAlcantara: {
    top: 392,
    left: 36,
  },
  yourName: {
    top: 364,
  },
  mobileNumber: {
    top: 468,
  },
  firstAveSevenhillsnsw: {
    top: 550,
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_sm,
  },
  addFoundItemsChild3: {
    top: 440,
  },
  alcantarakyrahgmailcom: {
    textDecoration: "underline",
  },
  emailAddress: {
    top: 415,
  },
  image12Icon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
  },
  uploadAnImage: {
    top: 627,
    left: 34,
    width: 315,
    height: 25,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  image26: {
    top: 630,
    left: 145,
    height: 60,
  },
  whereDidYou: {
    top: 522,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  whenDidYou: {
    top: 572,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  addPosition: {
    left: 301,
    top: 201,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  addFoundItemsChild32: {
    top: 596,
  },
  text6: {
    top: 601,
    left: 40,
    color: "#c2bfbf",
    fontSize: FontSize.size_sm,
  },
  image44IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  image44IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  image44: {
    left: 157,
    top: 660,
    width: 39,
    height: 36,
    position: "absolute",
  },
  addFoundItems: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default AddFoundItems;
