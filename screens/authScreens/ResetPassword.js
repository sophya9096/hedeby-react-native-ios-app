import React from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import ship from "../../assets/images/whitelogo2.png";
import { AntDesign } from "@expo/vector-icons";

const win = Dimensions.get("window");

function ResetPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.wrapTop}
        onPress={() => navigation.navigate("otpverification")}
      >
        <AntDesign
          name="left"
          size={win.width / 20}
          color="white"
          style={styles.arrow}
        />
        <Text style={styles.heading}>Reset Password</Text>
      </Pressable>
      <View style={styles.Logo}>
        <Image source={ship} />
      </View>
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <View style={styles.cardWrap}>
            <Text style={styles.headTxt}>Enter new Password</Text>
            <View style={styles.TxtInput}>
              <TextInput
                placeholder="New password"
                style={styles.input}
                placeholderTextColor="grey"
              />
              <TextInput
                placeholder="Confirm password"
                style={styles.input}
                placeholderTextColor="grey"
              />
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("loginscreen")}
            style={{
              backgroundColor: "#7898FB",
              width: "30%",
              height: "10%",
              borderRadius: 25,
              justifyContent: "center",
              marginLeft: win.width / 3.5,
              marginTop: win.height / 20,
              marginBottom: win.height / 30,
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
              Save
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    height: "100%",
    width: win.width,
    // alignItems: "center",
    // justifyContent: "center",
  },
  Logo: {
    alignItems: "center",
    // marginTop: win.height / 30,
  },

  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 30,
  },
  form: {
    alignItems: "center",
    marginTop: win.height / 20,
  },
  formContainer: {
    backgroundColor: "rgba(251, 252, 250, 0.12)",
    // borderWidth: 1,
    // height: win.height / 1.8,
    width: win.width / 1.2,
    borderRadius: win.width / 10,
    flexDirection: "column",
    // justifyContent: "space-evenly",
  },
  cardWrap: {
    width: "90%",
    marginLeft: win.width / 22,
    borderWidth: 0,
    marginTop: win.height / 25,
    // borderBottomWidth: 1,
    // borderBottomColor: "#5CE5D5",
  },
  headTxt: {
    color: "#5CE5D5",
    fontSize: win.height / 35,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#5CE5D5",
    borderRadius: 7,
    height: win.height / 17,
    paddingLeft: win.width / 40,
    marginTop: win.height / 25,
  },
  TxtInput: {
    margin: win.height / 24,
  },
  wrapTop: {
    flexDirection: "row",
    paddingBottom: win.height / 30,
    alignItems: "center",
    marginTop: win.height / 16,
    marginLeft: win.width / 16,
  },
});

export default ResetPassword;
