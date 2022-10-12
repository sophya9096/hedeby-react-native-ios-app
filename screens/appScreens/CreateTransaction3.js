import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
} from "react-native";
import logo from "../../assets/images/smallLogo.png";
import Flower from "../../assets/images/flower.png";

const win = Dimensions.get("window");

function CreateTransaction3({ setScreenToShow }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Pressable onPress={() => setScreenToShow("createtransaction2")}>
          <Image source={logo} style={{ marginLeft: win.width / 25 }} />
        </Pressable>
        <Text style={styles.heading}>Create Transaction</Text>
        <View></View>
      </View>
      <View>
        <Text style={styles.headingText}>Enter transaction detail</Text>
      </View>
      <View style={styles.balanceView}>
        <View style={styles.topCont}>
          <View>
            <View style={styles.wrapinn}>
              <Image source={Flower} />
              <Text
                style={{
                  color: "#FFC107",
                  fontSize: win.height / 40,
                  marginVertical: win.height / 80,
                }}
              >
                Naz Israyelyan
              </Text>
            </View>
            <TextInput
              placeholder="Price, Eth*"
              style={styles.inputField}
              placeholderTextColor="#FBFCFA99"
            />
            <TextInput
              multiline={true}
              numberOfLines={5}
              placeholder="Your message or notes"
              style={styles.inputField2}
              placeholderTextColor="#FBFCFA99"
            />
          </View>
        </View>
      </View>
      <Pressable
        style={styles.nextbtn}
        onPress={() => setScreenToShow("homescreen")}
      >
        <Text style={{ color: "#FFFFFF", fontSize: win.height / 40 }}>
          Create
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    width: win.width,
    flex: 1,
  },
  wrap: {
    flexDirection: "row",
    marginTop: win.height / 40,
    height: win.height / 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#FBFCFA40",
    justifyContent: "space-between",
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: win.width / 30,
    borderRadius: win.width / 50,
    width: win.width / 2.8,
    justifyContent: "space-between",
    marginTop: win.height / 20,
    marginLeft: win.width / 1.6,
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
  },
  headingText: {
    color: "#FFC107",
    fontSize: win.width / 20,
    textAlign: "center",
    marginTop: win.height / 40,
  },
  balanceView: {
    backgroundColor: "#14254a",
    height: win.height / 1.7,
    marginTop: win.height / 40,
    paddingVertical: win.height / 20,
    borderRadius: win.width / 20,
    marginHorizontal: win.width / 20,
  },
  wrapinn: {
    alignItems: "center",
  },
  topCont: {
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 20,
  },
  inputField: {
    backgroundColor: " rgba(251, 252, 250, 0.12)",
    borderWidth: 1,
    color: "white",
    height: win.height / 15,
    borderColor: "#FFC107",
    marginVertical: win.height / 25,
    // marginTop: win.height / 30,
    borderRadius: 8,
    paddingHorizontal: win.width / 40,
  },
  inputField2: {
    backgroundColor: " rgba(251, 252, 250, 0.12)",
    borderWidth: 1,
    color: "white",
    height: win.height / 5,
    borderColor: "#FFC107",
    marginVertical: win.height / 25,
    borderRadius: 8,
    paddingHorizontal: win.width / 40,
    justifyContent: "flex-start",
  },
  nextbtn: {
    backgroundColor: "#FFC107",
    marginHorizontal: win.width / 3,
    height: win.height / 20,
    marginVertical: win.height / 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
export default CreateTransaction3;
