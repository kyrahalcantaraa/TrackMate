import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
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
      <Text style={[styles.notifications1, styles.searchTypo]}>
        Notifications
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
      <Text
        style={[styles.newAddedItem, styles.newTypo]}
      >{`1 new added item to lost item
`}</Text>
      <View style={[styles.notificationsChild, styles.notificationsLayout]} />
      <Text
        style={[styles.newItemsAdded, styles.newTypo]}
      >{`2 new items added to found item
`}</Text>
      <View style={[styles.notificationsItem, styles.notificationsLayout]} />
      <TextInput style={styles.notificationsInner} />
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <Image
        style={styles.image18Icon}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  newTypo: {
    width: 251,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  notificationsLayout: {
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
  notifications1: {
    top: 190,
    left: 139,
    width: 137,
    height: 24,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  image12Icon: {
    top: 727,
    left: 230,
    width: 45,
    height: 43,
    position: "absolute",
  },
  newAddedItem: {
    top: 316,
    left: 25,
    height: 24,
  },
  notificationsChild: {
    top: 365,
  },
  newItemsAdded: {
    top: 383,
    height: 63,
    left: 24,
  },
  notificationsItem: {
    top: 452,
  },
  notificationsInner: {
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
  },
  image18Icon: {
    top: 238,
    left: 46,
    width: 14,
    height: 14,
    position: "absolute",
  },
  notifications: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Notifications;
