import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// icon
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import { fonts } from "../utils/constants";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* form group */}
      <View style={styles.formGroup}>
        <TextInput
          placeholder="Username"
          style={{ ...styles.formGroupInput, fontFamily: fonts.OpenSansItalic }}
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
      </View>
      <View style={{ ...styles.formGroup, marginBottom: 20 }}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!isShowPassword}
          style={{ ...styles.formGroupInput, fontFamily: fonts.OpenSansItalic }}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Entypo
          name={isShowPassword ? "eye" : "eye-with-line"}
          size={24}
          color="black"
          onPress={() => setShowPassword(!isShowPassword)}
        />
      </View>

      {/* forgot password */}
      <View style={styles.forgot}>
        <Text
          style={{ ...styles.forgotText, fontFamily: fonts.OpenSansItalic }}
        >
          Forgot Password?
        </Text>
      </View>

      {/* button submit */}
      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.textSubmit}>Login</Text>
      </TouchableOpacity>

      {/* Orther */}
      <Text style={{ ...styles.ortherText, fontFamily: fonts.OpenSansItalic }}>
        Or Login With
      </Text>

      {/* login with */}
      {/* <View style={styles.socials}>
        <View style={styles.social}>
          <FontAwesome5 name="facebook" size={36} color="blue" />
        </View>
        <View>
          <FontAwesome5 name="google-plus" size={36} color="red" />
        </View>
        <View>
          <MaterialCommunityIcons
            name="face-recognition"
            size={36}
            color="black"
          />
        </View>
      </View> */}
      <View style={styles.loginWithFace}>
        <MaterialCommunityIcons
          name="face-recognition"
          size={48}
          color="#e84393"
        />
        <Text style={styles.loginWithFaceTitle}>Login With FaceID</Text>
        <Text style={styles.loginWithFaceText}>
          look directly at your front camera to use faceID
        </Text>
      </View>
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

  //   forgot password
  forgot: {
    width: "90%",
    marginBottom: 40,
  },
  forgotText: {
    textAlign: "right",
    paddingHorizontal: 5,
    color: "#636e72",
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

  //   socials
  socials: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  social: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // login face
  loginWithFace: {
    width: "90%",
    backgroundColor: "#dfe6e9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 25,
  },
  loginWithFaceTitle: {
    marginVertical: 10,
    fontWeight: "700",
    fontSize: 18,
    color: "#e84393",
  },
  loginWithFaceText: {
    width: "60%",
    textAlign: "center",
    fontWeight: "light",
  },
});

export default Login;
