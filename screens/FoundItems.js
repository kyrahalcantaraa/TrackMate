import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FoundItems = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.foundItems}>
      <ScrollView
        style={styles.rectangleParent}
        horizontal={false}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameShadowBox]} />
        <View style={[styles.frameInner, styles.frameShadowBox]} />
        <View style={[styles.rectangleView, styles.frameShadowBox]} />
        <Image
          style={[styles.image25Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-25.png")}
        />
        <Image
          style={[styles.image19Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-191.png")}
        />
        <Text style={styles.sunglassRaybanColorContainer}>
          <Text style={styles.sunglass}>{`Sunglass
`}</Text>
          <Text style={styles.raybanColorBlue}>{`Rayban, color blue with case
Location found: Blacktown Station
Date Found: 19/04/202`}</Text>
          <Text style={styles.text}>4</Text>
        </Text>
        <Text style={styles.speakerMarshallSmallContainer}>
          <Text style={styles.sunglass}>{`Speaker
`}</Text>
          <Text style={styles.raybanColorBlue}>{`Marshall, small color black
Location found: Manly, Beach
Date Found: 15/04/202`}</Text>
          <Text style={styles.text}>4</Text>
        </Text>
        <Image
          style={styles.image21Icon}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
        <Image
          style={styles.image23Icon}
          contentFit="cover"
          source={require("../assets/image-23.png")}
        />
        <Text
          style={[styles.laptopAsusE210Container, styles.containerPosition]}
        >
          <Text style={styles.sunglass}>{`Laptop
`}</Text>
          <Text
            style={styles.raybanColorBlue}
          >{`ASUS E210 11.6” Ultra Thin Notebook
Location found: KOI Library
Date Found: 15/04/2024`}</Text>
        </Text>
        <Text
          style={[styles.tumblerAquaFlaskContainer, styles.containerPosition]}
        >
          <Text style={styles.sunglass}>{`Tumbler
`}</Text>
          <Text style={styles.raybanColorBlue}>{`Aqua Flask, color white
Location found: KOI Pantry
Date Found: 30/03/202`}</Text>
          <Text style={styles.text}>4</Text>
        </Text>
      </ScrollView>
      <TextInput
        style={[styles.frame, styles.frameLayout]}
        placeholder="Search"
        placeholderTextColor="#000"
      />
      <View style={[styles.frame1, styles.frame1Layout]}>
        <Image
          style={[styles.pinkCloudHi2Icon, styles.frame1Layout]}
          contentFit="cover"
          source={require("../assets/pinkcloudhi-21.png")}
        />
      </View>
      <Pressable
        style={styles.add}
        onPress={() => navigation.navigate("AddFoundItems")}
      >
        <Text style={styles.add1}>Add</Text>
      </Pressable>
      <Text style={[styles.foundItems1, styles.frameLayout]}>Found Items</Text>
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
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/image-17.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameShadowBox: {
    marginLeft: 19,
    height: 240,
    width: 147,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    width: 147,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  containerPosition: {
    top: 414,
    height: 83,
    width: 118,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  frameLayout: {
    height: 24,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  frame1Layout: {
    height: 262,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
    height: 240,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 147,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  frameItem: {
    zIndex: 1,
  },
  frameInner: {
    zIndex: 2,
  },
  rectangleView: {
    zIndex: 3,
  },
  image25Icon: {
    top: 260,
    left: 166,
    height: 143,
    zIndex: 4,
  },
  image19Icon: {
    height: 140,
    zIndex: 5,
    width: 147,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  sunglass: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  raybanColorBlue: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
  },
  text: {
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
  },
  sunglassRaybanColorContainer: {
    left: 12,
    zIndex: 6,
    height: 83,
    width: 118,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    top: 152,
    position: "absolute",
  },
  speakerMarshallSmallContainer: {
    height: 72,
    zIndex: 7,
    left: 180,
    width: 118,
    top: 152,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  image21Icon: {
    top: 17,
    left: 183,
    width: 115,
    height: 113,
    zIndex: 8,
    position: "absolute",
  },
  image23Icon: {
    top: 282,
    left: 3,
    width: 140,
    height: 96,
    zIndex: 9,
    position: "absolute",
  },
  laptopAsusE210Container: {
    left: 11,
    zIndex: 10,
  },
  tumblerAquaFlaskContainer: {
    zIndex: 11,
    left: 180,
  },
  rectangleParent: {
    top: 280,
    left: 39,
    width: 313,
    flexWrap: "wrap",
    maxWidth: 313,
    position: "absolute",
    flex: 1,
  },
  frame: {
    top: 234,
    left: 36,
    borderRadius: Border.br_11xl,
    borderColor: Color.colorBlack,
    borderWidth: .5,
    width: 300,
    borderStyle: "solid",
    height: 25,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  pinkCloudHi2Icon: {
    width: 341,
    left: 0,
    top: 0,
  },
  frame1: {
    top: -72,
    left: -181,
    width: 571,
    overflow: "hidden",
  },
  add1: {
    fontSize: FontSize.size_5xl,
    color: Color.colorHotpink_100,
    width: 62,
    height: 29,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  add: {
    left: 301,
    top: 191,
    position: "absolute",
  },
  foundItems1: {
    top: 190,
    left: 139,
    fontSize: FontSize.size_xl,
    width: 137,
    color: Color.colorBlack,
    textAlign: "left",
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
  image6: {
    left: 312,
    top: 715,
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
  frameIcon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
    overflow: "hidden",
  },
  foundItems: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default FoundItems;
