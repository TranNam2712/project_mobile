import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../utils/constants";
import Home from "../screens/Home";
import Devices from "../screens/Devices";
import Profile from "../screens/Profile";

const RootNavigation = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Devices" component={Devices} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
