import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LostItems = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lostItems}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-21.png")}
      />
      <Pressable
        style={styles.add}
        onPress={() => navigation.navigate("AddLostItem")}
      >
        <Text style={[styles.add1, styles.add1Typo]}>Add</Text>
      </Pressable>
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
        style={[styles.image7Icon, styles.containerPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Text style={styles.lostItems1}>Lost Items</Text>
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
        style={[styles.iphone14ProContainer, styles.containerPosition]}
        onPress={() => navigation.navigate("LostItemsInfo")}
      >
        <Text style={[styles.text, styles.add1Typo]}>
          <Text style={styles.iphone14Pro}>{`Iphone 14 Pro
`}</Text>
          <Text style={styles.shanelAlcantaraPurpleWithB}>
            <Text style={styles.shanelAlcantara}>{`Shanel Alcantara
`}</Text>
            <Text
              style={styles.purpleWithBlack}
            >{`Purple with black case and card holder
`}</Text>
          </Text>
        </Text>
      </Pressable>
      <View style={[styles.lostItemsChild, styles.lostLayout]} />
      <Pressable
        style={[styles.laptopJenrickAbanaContainer, styles.containerPosition]}
        onPress={() => navigation.navigate("LostItemsInfo1")}
      >
        <Text style={[styles.text, styles.add1Typo]}>
          <Text style={styles.iphone14Pro}>{`Laptop
`}</Text>
          <Text style={styles.shanelAlcantaraPurpleWithB}>
            <Text style={styles.shanelAlcantara}>{`Jenrick Abana
`}</Text>
            <Text
              style={styles.purpleWithBlack}
            >{`Dell color black with sticker “JDM”
`}</Text>
          </Text>
        </Text>
      </Pressable>
      <View style={[styles.lostItemsItem, styles.lostLayout]} />
      <Pressable
        style={[styles.ringNicoleCastilloContainer, styles.containerPosition]}
        onPress={() => navigation.navigate("LostItemsInfo2")}
      >
        <Text style={[styles.text, styles.add1Typo]}>
          <Text style={styles.iphone14Pro}>{`Ring
`}</Text>
          <Text style={styles.shanelAlcantaraPurpleWithB}>
            <Text style={styles.shanelAlcantara}>{`Nicole Castillo
`}</Text>
            <Text style={styles.purpleWithBlack}>{`Silver, one diamond
`}</Text>
          </Text>
        </Text>
      </Pressable>
      <View style={[styles.lostItemsInner, styles.lostLayout]} />
      <Pressable
        style={[styles.walletMarkVillonesContainer, styles.containerPosition]}
        onPress={() => navigation.navigate("LostItemsInfo3")}
      >
        <Text style={[styles.text, styles.add1Typo]}>
          <Text style={styles.iphone14Pro}>{`Wallet
`}</Text>
          <Text style={styles.shanelAlcantaraPurpleWithB}>
            <Text style={styles.shanelAlcantara}>{`Mark Villones
`}</Text>
            <Text style={styles.purpleWithBlack}>{`Coach, color brown with cards
`}</Text>
          </Text>
        </Text>
      </Pressable>
      <View style={[styles.lineView, styles.lostLayout]} />
      <TextInput style={styles.rectangleTextinput} />
      <Text style={[styles.search, styles.add1Typo]}>Search</Text>
      <Image
        style={styles.image18Icon}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  add1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  containerPosition: {
    left: 24,
    position: "absolute",
  },
  lostLayout: {
    height: 1,
    width: 348,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray,
    left: 16,
    borderStyle: "solid",
    position: "absolute",
  },
  pinkCloudHi2Icon: {
    top: -72,
    left: -181,
    width: 341,
    height: 262,
    position: "absolute",
  },
  add1: {
    fontSize: FontSize.size_5xl,
    color: Color.colorHotpink_100,
    width: 62,
    height: 29,
  },
  add: {
    left: 301,
    top: 191,
    position: "absolute",
  },
  image4Icon: {
    top: 717,
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
    top: 711,
    width: 59,
    height: 59,
  },
  lostItems1: {
    top: 190,
    left: 139,
    width: 137,
    height: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  image12Icon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
  },
  iphone14Pro: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  shanelAlcantara: {
    fontSize: FontSize.size_sm,
  },
  purpleWithBlack: {
    fontSize: FontSize.size_smi,
  },
  shanelAlcantaraPurpleWithB: {
    color: Color.colorDarkgray_100,
  },
  text: {
    width: 251,
    height: 63,
  },
  iphone14ProContainer: {
    top: 296,
  },
  lostItemsChild: {
    top: 365,
  },
  laptopJenrickAbanaContainer: {
    top: 383,
  },
  lostItemsItem: {
    top: 452,
  },
  ringNicoleCastilloContainer: {
    top: 466,
  },
  lostItemsInner: {
    top: 535,
  },
  walletMarkVillonesContainer: {
    top: 549,
  },
  lineView: {
    top: 618,
  },
  rectangleTextinput: {
    top: 234,
    left: 36,
    borderRadius: Border.br_11xl,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 307,
    borderStyle: "solid",
    height: 24,
    position: "absolute",
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
  lostItems: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LostItems;
