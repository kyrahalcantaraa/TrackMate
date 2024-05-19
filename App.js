const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogIn from "./screens/LogIn";
import HomePage from "./screens/HomePage";
import Register from "./screens/Register";
import GetStarted from "./screens/GetStarted";
import MyAccount from "./screens/MyAccount";
import FrameComponent from "./components/FrameComponent";
import Frame from "./components/Frame";
import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Message from "./screens/Message";
import Message1 from "./screens/Message1";
import Message2 from "./screens/Message2";
import Message3 from "./components/Message3";
import Messages from "./screens/Messages";
import Notifications from "./screens/Notifications";
import AddLostItem from "./screens/AddLostItem";
import AddFoundItems from "./screens/AddFoundItems";
import LostItems from "./screens/LostItems";
import MyProfile from "./screens/MyProfile";
import FoundItems from "./screens/FoundItems";
import FoundItemsAdded from "./screens/FoundItemsAdded";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import LosItemAdded from "./screens/LosItemAdded";
import LostItemsInfo from "./screens/LostItemsInfo";
import LostItemsInfo1 from "./screens/LostItemsInfo1";
import LostItemsInfo2 from "./screens/LostItemsInfo2";
import LostItemsInfo3 from "./screens/LostItemsInfo3";
import MyFoundItems from "./screens/MyFoundItems";
import MyLostItems from "./screens/MyLostItems";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Itim-Regular": require("./assets/fonts/Itim-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LogIn"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyAccount"
              component={MyAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent"
              component={FrameComponent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message"
              component={Message}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message1"
              component={Message1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message2"
              component={Message2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddLostItem"
              component={AddLostItem}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddFoundItems"
              component={AddFoundItems}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LostItems"
              component={LostItems}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyProfile"
              component={MyProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoundItems"
              component={FoundItems}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoundItemsAdded"
              component={FoundItemsAdded}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LosItemAdded"
              component={LosItemAdded}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LostItemsInfo"
              component={LostItemsInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LostItemsInfo1"
              component={LostItemsInfo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LostItemsInfo2"
              component={LostItemsInfo2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LostItemsInfo3"
              component={LostItemsInfo3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyFoundItems"
              component={MyFoundItems}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyLostItems"
              component={MyLostItems}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <FrameComponent />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
