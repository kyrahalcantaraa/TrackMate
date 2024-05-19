import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Messages = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.messages}>
      <Image
        style={styles.pinkCloudHi2Icon}
        contentFit="cover"
        source={require("../assets/pinkcloudhi-2.png")}
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
      <Text style={styles.message}>Message</Text>
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
      <Text
        style={[styles.shanelAlcantaraHelloContainer, styles.containerLayout]}
      >
        <Text style={styles.shanelAlcantara}>{`Shanel Alcantara
`}</Text>
        <Text style={styles.hello}>{`Hello
`}</Text>
      </Text>
      <View style={[styles.messagesChild, styles.messagesLayout]} />
      <Text style={[styles.jenrickAbanaYesContainer, styles.containerLayout]}>
        <Text style={styles.jenrickAbana}>{`Jenrick Abana
`}</Text>
        <Text style={styles.yesThatIs}>{`Yes that is mine.
`}</Text>
      </Text>
      <View style={[styles.messagesItem, styles.messagesLayout]} />
      <Text
        style={[styles.nicoleCastilloHelloContainer, styles.containerLayout]}
      >
        <Text style={styles.jenrickAbana}>{`Nicole Castillo
`}</Text>
        <Text style={styles.yesThatIs}>{`Hello, how are you?
`}</Text>
      </Text>
      <View style={[styles.messagesInner, styles.messagesLayout]} />
      <Text style={[styles.markVillonesWhereContainer, styles.containerLayout]}>
        <Text style={styles.jenrickAbana}>{`Mark Villones
`}</Text>
        <Text style={styles.yesThatIs}>{`Where did you found it?
`}</Text>
      </Text>
      <View style={[styles.lineView, styles.messagesLayout]} />
      <TextInput style={styles.rectangleTextinput} />
      <Text style={styles.search}>Search</Text>
      <Image
        style={styles.image18Icon}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    height: 63,
    width: 251,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    left: 24,
    position: "absolute",
  },
  messagesLayout: {
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
    width: 59,
    height: 59,
    left: 24,
    position: "absolute",
  },
  message: {
    top: 190,
    left: 139,
    width: 137,
    height: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  image12Icon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
  },
  shanelAlcantara: {
    color: Color.colorBlack,
  },
  hello: {
    color: Color.colorDarkgray_100,
  },
  shanelAlcantaraHelloContainer: {
    top: 296,
    fontSize: FontSize.size_xl,
  },
  messagesChild: {
    top: 365,
  },
  jenrickAbana: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  yesThatIs: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkgray_100,
  },
  jenrickAbanaYesContainer: {
    top: 383,
  },
  messagesItem: {
    top: 452,
  },
  nicoleCastilloHelloContainer: {
    top: 466,
  },
  messagesInner: {
    top: 535,
  },
  markVillonesWhereContainer: {
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
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
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
  messages: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Messages;
