import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MyLostItems = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myLostItems}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-2.png")}
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
      <Text style={[styles.myLostItems1, styles.back1Typo]}>My Lost Items</Text>
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
      <Text style={[styles.laptopAsusColorContainer, styles.back1Typo]}>
        <Text style={[styles.laptop, styles.back1Typo1]}>{`Laptop
`}</Text>
        <Text style={styles.asusColorBlack}>{`Asus, color black, 15”
`}</Text>
      </Text>
      <View style={[styles.myLostItemsChild, styles.lostBorder]} />
      <TextInput style={[styles.myLostItemsItem, styles.lostBorder]} />
      <Text style={[styles.search, styles.back1Typo]}>Search</Text>
      <Image
        style={styles.image18Icon}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("MyProfile")}
      >
        <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  back1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  back1Typo1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  lostBorder: {
    borderStyle: "solid",
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
  myLostItems1: {
    left: 125,
    width: 137,
    height: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    top: 190,
    position: "absolute",
  },
  image12Icon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
  },
  laptop: {
    color: Color.colorBlack,
  },
  asusColorBlack: {
    fontSize: FontSize.size_mini,
    color: Color.colorSilver_100,
  },
  laptopAsusColorContainer: {
    top: 296,
    width: 251,
    height: 63,
    left: 24,
    position: "absolute",
  },
  myLostItemsChild: {
    top: 345,
    borderColor: Color.colorLightgray,
    borderTopWidth: 1,
    width: 348,
    height: 1,
    left: 24,
  },
  myLostItemsItem: {
    top: 234,
    left: 36,
    borderRadius: Border.br_11xl,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 307,
    height: 24,
    backgroundColor: Color.colorWhite,
  },
  search: {
    top: 236,
    left: 71,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    position: "absolute",
  },
  image18Icon: {
    top: 238,
    left: 46,
    width: 14,
    height: 14,
    position: "absolute",
  },
  back1: {
    width: 54,
    height: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  back: {
    left: 17,
  },
  myLostItems: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MyLostItems;
