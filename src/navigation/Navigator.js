import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import Drawer from "./Drawer";

const Navigator = createSwitchNavigator(
  {
    Auth: { screen: AuthScreen },
    Home: { screen: Drawer },
  },
  {
    initialRouteName: "Auth"
  }
);

export default AppContainer = createAppContainer(Navigator);
