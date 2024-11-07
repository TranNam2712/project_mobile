import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// react
import { useState } from "react";

// icon
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

// country flag
import CountryFlag from "react-native-country-flag";
import { languages } from "../../utils/constants";

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  // show drop down
  const [isShowDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.changeLanguage}
        onPress={() => setShowDropDown(!isShowDropDown)}
      >
        <Text style={styles.changeLanguageText}>{currentLanguage.title}</Text>
        <AntDesign name="caretdown" size={12} color="black" />
      </TouchableOpacity>

      <View
        style={
          !isShowDropDown
            ? styles.containerDropDown
            : { ...styles.containerDropDown, display: "flex" }
        }
      >
        <FlatList
          data={languages}
          renderItem={({ item, index }) => {
            if (index === languages.length - 1) {
              return (
                <TouchableOpacity
                  style={{ ...styles.dropDownItem, borderBottomWidth: 0 }}
                >
                  <CountryFlag isoCode={item.flag} size={20} />
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity style={styles.dropDownItem}>
                <CountryFlag isoCode={item.flag} size={20} />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 15,
  },

  changeLanguage: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },

  changeLanguageText: {
    marginRight: 5,
    fontSize: 12,
    color: "#00cec9",
  },

  containerDropDown: {
    width: 150,
    backgroundColor: "white",
    position: "absolute",
    right: 10,
    top: 60,
    borderRadius: 5,
    display: "none",
  },

  dropDownItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default Header;
