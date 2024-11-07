import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../utils/constants";

// utils
import { colors } from "../utils/colors";

// component
import Register from "../screens/Register";
import Login from "../screens/Login";

// icon
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Header from "../components/Auth/Header";

const AuthNavigation = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          header: Header,
        }}
      >
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            // headerShown: false,
            tabBarIcon: (tabInfo) => {
              return (
                <AntDesign
                  name="login"
                  size={24}
                  color={
                    tabInfo.focused
                      ? colors.tabNavigateFocus
                      : colors.tabNavigateUnFocus
                  }
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            tabBarIcon: (tabInfo) => {
              return (
                <Feather
                  name="user-plus"
                  size={24}
                  color={
                    tabInfo.focused
                      ? colors.tabNavigateFocus
                      : colors.tabNavigateUnFocus
                  }
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AuthNavigation;
