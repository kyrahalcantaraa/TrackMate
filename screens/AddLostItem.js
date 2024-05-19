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
import { Button } from "@rneui/themed";
import Frame3 from "../components/Frame3";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AddLostItem = () => {
  const [image15Visible, setImage15Visible] = useState(false);
  const navigation = useNavigation();

  const openImage15 = useCallback(() => {
    setImage15Visible(true);
  }, []);

  const closeImage15 = useCallback(() => {
    setImage15Visible(false);
  }, []);

  return (
    <>
      <View style={styles.addLostItem}>
        <Image
          style={styles.pinkCloudHi2Icon}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-2.png")}
        />
        <View style={styles.homeindicator}>
          <View style={styles.homeIndicator} />
        </View>
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image15Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Pressable
          style={styles.image7Icon}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
        </Pressable>
        <Text style={[styles.newItem, styles.itemTypo]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addLostItemChild, styles.addItemLayout]} />
        <View style={[styles.addLostItemItem, styles.addItemLayout]} />
        <View style={[styles.addLostItemInner, styles.addItemLayout]} />
        <View style={[styles.rectangleView, styles.addItemLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addLostItemChild1, styles.addItemLayout]} />
        <Text style={[styles.laptop, styles.laptopClr]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopClr]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.whereDidYouPosition]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.yourNameClr]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.yourNameClr]}>
          Mobile Number
        </Text>
        <Text style={[styles.whereDidYou, styles.whereDidYouPosition]}>
          Where did you lose?
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.textTypo]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addLostItemChild2, styles.addItemLayout]} />
        <Text
          style={[styles.alcantarakyrahgmailcom, styles.whereDidYouPosition]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.yourNameClr]}>
          Email Address
        </Text>
        <Text style={[styles.uploadAnImage, styles.whereDidYouPosition]}>
          Upload an image of the lost item
        </Text>
        <Pressable
          style={[styles.image15, styles.image15Layout]}
          onPress={openImage15}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </Pressable>
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
        <View style={styles.homeindicator}>
          <View style={styles.homeIndicator} />
        </View>
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image15Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.itemTypo]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addLostItemChild, styles.addItemLayout]} />
        <View style={[styles.addLostItemItem, styles.addItemLayout]} />
        <View style={[styles.addLostItemInner, styles.addItemLayout]} />
        <View style={[styles.rectangleView, styles.addItemLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addLostItemChild1, styles.addItemLayout]} />
        <Text style={[styles.laptop, styles.laptopClr]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopClr]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.whereDidYouPosition]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.yourNameClr]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.yourNameClr]}>
          Mobile Number
        </Text>
        <Text style={[styles.whereDidYou, styles.whereDidYouPosition]}>
          Where did you lose?
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.textTypo]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addLostItemChild2, styles.addItemLayout]} />
        <Text
          style={[styles.alcantarakyrahgmailcom, styles.whereDidYouPosition]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.yourNameClr]}>
          Email Address
        </Text>
        <Text style={[styles.uploadAnImage, styles.whereDidYouPosition]}>
          Upload an image of the lost item
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
        <View style={styles.homeindicator}>
          <View style={styles.homeIndicator} />
        </View>
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image15Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.itemTypo]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addLostItemChild, styles.addItemLayout]} />
        <View style={[styles.addLostItemItem, styles.addItemLayout]} />
        <View style={[styles.addLostItemInner, styles.addItemLayout]} />
        <View style={[styles.rectangleView, styles.addItemLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addLostItemChild1, styles.addItemLayout]} />
        <Text style={[styles.laptop, styles.laptopClr]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopClr]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.whereDidYouPosition]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.yourNameClr]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.yourNameClr]}>
          Mobile Number
        </Text>
        <Text style={[styles.whereDidYou, styles.whereDidYouPosition]}>
          Where did you lose?
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.textTypo]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addLostItemChild2, styles.addItemLayout]} />
        <Text
          style={[styles.alcantarakyrahgmailcom, styles.whereDidYouPosition]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.yourNameClr]}>
          Email Address
        </Text>
        <Text style={[styles.uploadAnImage, styles.whereDidYouPosition]}>
          Upload an image of the lost item
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
        <View style={styles.homeindicator}>
          <View style={styles.homeIndicator} />
        </View>
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image6Icon, styles.image15Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.itemTypo]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addLostItemChild, styles.addItemLayout]} />
        <View style={[styles.addLostItemItem, styles.addItemLayout]} />
        <View style={[styles.addLostItemInner, styles.addItemLayout]} />
        <View style={[styles.rectangleView, styles.addItemLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addLostItemChild1, styles.addItemLayout]} />
        <Text style={[styles.laptop, styles.laptopClr]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopClr]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.whereDidYouPosition]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.yourNameClr]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.yourNameClr]}>
          Mobile Number
        </Text>
        <Text style={[styles.whereDidYou, styles.whereDidYouPosition]}>
          Where did you lose?
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.textTypo]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addLostItemChild2, styles.addItemLayout]} />
        <Text
          style={[styles.alcantarakyrahgmailcom, styles.whereDidYouPosition]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.yourNameClr]}>
          Email Address
        </Text>
        <Text style={[styles.uploadAnImage, styles.whereDidYouPosition]}>
          Upload an image of the lost item
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
          style={[styles.image6Icon, styles.image15Layout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Text style={[styles.newItem, styles.itemTypo]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <View style={[styles.addLostItemChild, styles.addItemLayout]} />
        <View style={[styles.addLostItemItem, styles.addItemLayout]} />
        <View style={[styles.addLostItemInner, styles.addItemLayout]} />
        <View style={[styles.rectangleView, styles.addItemLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <View style={[styles.addLostItemChild1, styles.addItemLayout]} />
        <Text style={[styles.laptop, styles.laptopClr]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopClr]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.whereDidYouPosition]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.yourNameClr]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.yourNameClr]}>
          Mobile Number
        </Text>
        <Text style={[styles.whereDidYou, styles.whereDidYouPosition]}>
          Where did you lose?
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.textTypo]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <View style={[styles.addLostItemChild2, styles.addItemLayout]} />
        <Text
          style={[styles.alcantarakyrahgmailcom, styles.whereDidYouPosition]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.yourNameClr]}>
          Email Address
        </Text>
        <Text style={[styles.uploadAnImage, styles.whereDidYouPosition]}>
          Upload an image of the lost item
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
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          color="#ff7db0"
          titleStyle={styles.addBtn}
          onPress={() => navigation.navigate("LosItemAdded")}
          containerStyle={styles.addBtn1}
          buttonStyle={styles.addBtn2}
        />
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
          style={[styles.image6Icon, styles.image15Layout]}
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
        <Text style={[styles.newItem, styles.itemTypo]}>New Item</Text>
        <Text style={[styles.item, styles.itemTypo]}>Item</Text>
        <Text style={[styles.details, styles.itemTypo]}>Details</Text>
        <TextInput style={[styles.addLostItemChild, styles.addItemLayout]} />
        <TextInput style={[styles.addLostItemItem, styles.addItemLayout]} />
        <TextInput style={[styles.addLostItemInner, styles.addItemLayout]} />
        <TextInput style={[styles.rectangleView, styles.addItemLayout]} />
        <Text style={[styles.text, styles.textTypo]}>0412345678</Text>
        <TextInput style={[styles.addLostItemChild1, styles.addItemLayout]} />
        <Text style={[styles.laptop, styles.laptopClr]}>Laptop</Text>
        <Text style={[styles.asusColorBlack, styles.laptopClr]}>
          Asus, color black, 15”
        </Text>
        <Text style={[styles.kyrahAlcantara, styles.whereDidYouPosition]}>
          Kyrah Alcantara
        </Text>
        <Text style={[styles.yourName, styles.yourNameClr]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.yourNameClr]}>
          Mobile Number
        </Text>
        <Text style={[styles.whereDidYou, styles.whereDidYouPosition]}>
          Where did you lose?
        </Text>
        <Text style={[styles.firstAveSevenhillsnsw, styles.textTypo]}>
          28 First Ave, Sevenhills.NSW
        </Text>
        <TextInput style={[styles.addLostItemChild2, styles.addItemLayout]} />
        <Text
          style={[styles.alcantarakyrahgmailcom, styles.whereDidYouPosition]}
        >
          alcantarakyrah@gmail.com
        </Text>
        <Text style={[styles.emailAddress, styles.yourNameClr]}>
          Email Address
        </Text>
        <Text style={[styles.uploadAnImage, styles.whereDidYouPosition]}>
          Upload an image of the lost item
        </Text>
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

      <Modal animationType="fade" transparent visible={image15Visible}>
        <View style={styles.image15Overlay}>
          <Pressable style={styles.image15Bg} onPress={closeImage15} />
          <Frame3 onClose={closeImage15} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    color: "#ff7db0",
    fontSize: 24,
    fontFamily: "Itim-Regular",
  },
  addBtn1: {
    left: 301,
    top: 201,
    position: "absolute",
  },
  addBtn2: {},
  addTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  image15Layout: {
    width: 55,
    position: "absolute",
  },
  itemTypo: {
    height: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  addItemLayout: {
    height: 26,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_26xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  laptopClr: {
    color: Color.colorDarkgray_400,
    fontSize: FontSize.size_sm,
  },
  whereDidYouPosition: {
    left: 39,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  yourNameClr: {
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
    height: 34,
    borderRadius: Border.br_26xl,
    position: "absolute",
  },
  add: {
    top: 201,
    left: 301,
    fontSize: FontSize.size_5xl,
    color: Color.colorHotpink_100,
    width: 62,
    height: 29,
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
    width: 115,
    height: 24,
  },
  item: {
    top: 257,
    width: 47,
  },
  details: {
    top: 317,
    width: 115,
    height: 24,
  },
  addLostItemChild: {
    top: 286,
    left: 32,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  addLostItemItem: {
    top: 342,
    left: 32,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  addLostItemInner: {
    top: 394,
    left: 32,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  rectangleView: {
    top: 500,
    left: 32,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  text: {
    top: 505,
    left: 122,
    color: Color.colorDarkgray_200,
  },
  addLostItemChild1: {
    top: 554,
    left: 36,
  },
  laptop: {
    top: 291,
    left: 46,
    color: Color.colorDarkgray_400,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  asusColorBlack: {
    top: 346,
    left: 46,
    color: Color.colorDarkgray_400,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  kyrahAlcantara: {
    top: 398,
    color: Color.colorDarkgray_400,
    fontSize: FontSize.size_sm,
  },
  yourName: {
    top: 370,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  mobileNumber: {
    top: 474,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  whereDidYou: {
    top: 528,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  firstAveSevenhillsnsw: {
    top: 558,
    left: 44,
    color: Color.colorDarkgray_300,
  },
  addLostItemChild2: {
    top: 446,
    left: 32,
    width: 256,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  alcantarakyrahgmailcom: {
    top: 448,
    textDecoration: "underline",
    color: Color.colorDarkgray_400,
    fontSize: FontSize.size_sm,
  },
  emailAddress: {
    top: 421,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  uploadAnImage: {
    top: 591,
    width: 315,
    height: 25,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  image15Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  image15Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image15: {
    left: 148,
    top: 636,
    height: 60,
  },
  image12Icon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
  },
  addLostItem: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default AddLostItem;
