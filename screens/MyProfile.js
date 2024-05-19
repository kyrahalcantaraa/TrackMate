import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MyProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myProfile}>
      <Pressable
        style={[styles.myProfileChild, styles.profileLayout]}
        onPress={() => navigation.navigate("MyAccount")}
      />
      <Pressable style={[styles.myProfileItem, styles.profileLayout]} />
      <Pressable
        style={[styles.myProfileInner, styles.myProfileInnerLayout]}
        onPress={() => navigation.navigate("MyFoundItems")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.myProfileInnerLayout]}
        onPress={() => navigation.navigate("Messages")}
      />
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-21.png")}
      />
      <Pressable
        style={styles.image4}
        onPress={() => navigation.navigate("LostItems")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image18, styles.imageLayout]}
        onPress={() => navigation.navigate("MyLostItems")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-181.png")}
        />
      </Pressable>
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Pressable
        style={[styles.image17, styles.image17Position]}
        onPress={() => navigation.navigate("MyAccount")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-171.png")}
        />
      </Pressable>
      <Image
        style={[styles.image7Icon, styles.image17Position]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Text style={styles.myProfile1}>My Profile</Text>
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
      <Pressable
        style={styles.image19}
        onPress={() => navigation.navigate("MyFoundItems")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-19.png")}
        />
      </Pressable>
      <Text style={[styles.myAccount, styles.itemsTypo]}>My Account</Text>
      <Pressable
        style={[styles.myLostItemsContainer, styles.messagesPosition]}
        onPress={() => navigation.navigate("MyLostItems")}
      >
        <Text style={[styles.myLostItems, styles.itemsTypo]}>{`My Lost Items
`}</Text>
      </Pressable>
      <Text style={[styles.myFoundItems, styles.itemsTypo]}>{`My Found Items
`}</Text>
      <Text style={[styles.messages, styles.itemsTypo]}>Messages</Text>
      <Pressable
        style={styles.logOut}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={[styles.myLostItems, styles.itemsTypo]}>Log-out</Text>
      </Pressable>
      <View style={[styles.lineView, styles.image17Position]} />
      <Pressable
        style={[styles.image181, styles.imageLayout]}
        onPress={() => navigation.navigate("Messages")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-182.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 37,
    width: 263,
    backgroundColor: Color.colorHotpink_200,
    borderRadius: Border.br_mini,
    left: 49,
    position: "absolute",
  },
  myProfileInnerLayout: {
    left: 51,
    height: 37,
    width: 263,
    backgroundColor: Color.colorHotpink_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  imageLayout: {
    width: 24,
    position: "absolute",
  },
  image17Position: {
    left: 24,
    position: "absolute",
  },
  itemsTypo: {
    width: 251,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  messagesPosition: {
    left: 58,
    position: "absolute",
  },
  myProfileChild: {
    top: 283,
  },
  myProfileItem: {
    top: 323,
  },
  myProfileInner: {
    top: 363,
  },
  rectanglePressable: {
    top: 403,
  },
  pinkCloudHi2Icon: {
    top: -72,
    left: -181,
    width: 341,
    height: 262,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image4: {
    left: 137,
    top: 723,
    width: 47,
    height: 47,
    position: "absolute",
  },
  image18: {
    left: 21,
    height: 24,
    top: 331,
  },
  image6Icon: {
    top: 715,
    left: 312,
    width: 55,
    height: 55,
    position: "absolute",
  },
  image17: {
    top: 290,
    width: 22,
    height: 24,
  },
  image7Icon: {
    top: 717,
    width: 59,
    height: 59,
  },
  myProfile1: {
    top: 190,
    left: 139,
    fontSize: FontSize.size_5xl,
    width: 137,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    height: 90,
    position: "absolute",
  },
  image12Icon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
  },
  image19: {
    left: 29,
    top: 374,
    width: 16,
    height: 19,
    position: "absolute",
  },
  myAccount: {
    top: 291,
    height: 29,
    left: 58,
    position: "absolute",
  },
  myLostItems: {
    height: 24,
  },
  myLostItemsContainer: {
    top: 331,
  },
  myFoundItems: {
    top: 368,
    left: 57,
    height: 24,
    position: "absolute",
  },
  messages: {
    top: 410,
    left: 58,
    position: "absolute",
    height: 24,
  },
  logOut: {
    left: 27,
    top: 551,
    position: "absolute",
  },
  lineView: {
    top: 580,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderTopWidth: 1,
    width: 348,
    height: 1,
  },
  image181: {
    left: 25,
    top: 413,
    height: 21,
  },
  myProfile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyProfile;
