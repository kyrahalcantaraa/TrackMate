import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-2.png")}
      />
      
      <Pressable
        style={[styles.homepageChild, styles.imageLayout1]}
        onPress={() => navigation.navigate("AddLostItem")}
      />
      <Pressable style={[styles.homepageItem, styles.imageLayout1]} />
      <Text style={[styles.iLostSomething, styles.somethingTypo]}>
        I lost something
      </Text>
      <Pressable
        style={styles.iFoundSomethingContainer}
        onPress={() => navigation.navigate("AddFoundItems")}
      >
        <Text style={styles.somethingTypo}>I found something</Text>
      </Pressable>
      <Text style={styles.home}>Home</Text>
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
        style={[styles.image6, styles.imageLayout]}
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
      <Pressable
        style={[styles.image10, styles.imageLayout1]}
        onPress={() => navigation.navigate("Messages")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image9, styles.imageLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image17, styles.imageLayout1]}
        onPress={() => navigation.navigate("FoundItems")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLayout1: {
    height: 43,
    position: "absolute",
  },
  somethingTypo: {
    height: 32,
    width: 225,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  imageLayout: {
    height: 55,
    position: "absolute",
  },
  pinkCloudHi2Icon: {
    top: -72,
    left: -181,
    width: 341,
    height: 262,
    position: "absolute",
  },
  homepageChild: {
    top: 352,
    left: 75,
    width: 252,
    backgroundColor: Color.colorHotpink_100,
    borderRadius: Border.br_26xl,
    height: 43,
  },
  iLostSomething: {
    top: 358,
    left: 121,
    position: "absolute",
  },
  homepageItem: {
    top: 422,
    left: 77,
    width: 252,
    backgroundColor: Color.colorHotpink_100,
    borderRadius: Border.br_26xl,
    height: 43,
  },
  iFoundSomethingContainer: {
    left: 107,
    top: 430,
    position: "absolute",
  },
  home: {
    top: 185,
    left: 148,
    fontSize: FontSize.size_13xl,
    width: 95,
    height: 37,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
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
  image6: {
    left: 312,
    top: 715,
    width: 55,
  },
  image7Icon: {
    top: 715,
    left: 30,
    width: 59,
    height: 59,
    position: "absolute",
  },
  image10: {
    left: 310,
    top: 190,
    width: 43,
  },
  image9: {
    left: 18,
    top: 184,
    width: 62,
  },
  image17: {
    left: 225,
    top: 725,
    width: 45,
  },
  homepage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
