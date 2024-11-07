import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../utils/constants";

// container
import Home from "../screens/Home";
import Devices from "../screens/Devices";
import Profile from "../screens/Profile";

// redux
import { useTypedSelector } from "../hook/useTypeSelector";
import AuthNavigation from "./AuthNavigation";

const RootNavigation = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  const { isLogin } = useTypedSelector((state) => state.account);

  return (
    <NavigationContainer>
      {isLogin ? (
        <>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Devices" component={Devices} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </>
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
