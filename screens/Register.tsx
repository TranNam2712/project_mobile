import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Register = () => {
  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      {/* form group */}
      <View style={styles.formGroup}>
        <TextInput placeholder="Username" style={styles.formGroupInput} />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!isShowPassword}
          style={styles.formGroupInput}
        />
        <Entypo
          name={isShowPassword ? "eye" : "eye-with-line"}
          size={24}
          color="black"
          onPress={() => setShowPassword(!isShowPassword)}
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          placeholder="Comfirm password"
          secureTextEntry={!isShowPassword}
          style={styles.formGroupInput}
        />
        <Entypo
          name={isShowPassword ? "eye" : "eye-with-line"}
          size={24}
          color="black"
          onPress={() => setShowPassword(!isShowPassword)}
        />
      </View>

      {/* button submit */}
      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.textSubmit}>Sign Up</Text>
      </TouchableOpacity>

      {/* Orther */}
      <Text style={styles.ortherText}>Open camera to detect face</Text>

      {/* face detect */}
      <TouchableOpacity style={styles.faceDetect}>
        <Text style={styles.textSubmit}>Open camera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    marginBottom: 50,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
  },

  //   form group
  formGroup: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 40,
    backgroundColor: "#bdc3c7",
  },

  formGroupInput: {
    fontSize: 17,
    flex: 1,
  },

  //   button submit
  btnSubmit: {
    width: "60%",
    backgroundColor: "#0984e3",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 30,
  },

  textSubmit: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
  },

  //   Orther
  ortherText: {
    marginVertical: 20,
    fontSize: 14,
    color: "#636e72",
  },

  faceDetect: {
    width: "60%",
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 30,
  },
});

export default Register;
