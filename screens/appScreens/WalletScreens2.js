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
} from "react-native";
import logo from "../../assets/images/smallLogo.png";
import { AntDesign } from "@expo/vector-icons";
import AddWallet from "../../assets/images/wallet-add.png";
import Vector from "../../assets/images/earthVector.png";
import Transfer from "../../assets/images/send-sqau.png";
import Buy from "../../assets/images/buycrypto.png";
import Link from "../../assets/images/scan.png";
import { MaterialIcons } from "@expo/vector-icons";

const win = Dimensions.get("window");

function WalletScreen2() {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Image source={logo} style={{ marginLeft: win.width / 25 }} />
        <Text style={styles.heading}>Wallet</Text>
        <Image source={AddWallet} style={{ marginRight: win.width / 25 }} />
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.dropText}>Naz Wallet 1</Text>
        <MaterialIcons
          name="arrow-drop-down"
          size={win.width / 15}
          color="white"
        />
      </View>
      <View style={styles.balanceView}>
        <View style={styles.topCont}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: win.height / 20,
            }}
          >
            <Text style={{ color: "#FFC107", fontSize: win.width / 20 }}>
              Naz wallet 1
            </Text>
            <Text style={{ color: "white", fontSize: win.width / 15 }}>
              ...
            </Text>
          </View>
          <View style={styles.balanceHeading}>
            <Text style={styles.balanceText}>Balance</Text>
          </View>
          <Text style={styles.balanceCurrent}>$ 0.00</Text>
          <View style={styles.currImg}>
            <Image source={Vector} style={styles.imgSize} />
            <Text style={styles.currText}> 0</Text>
          </View>
        </View>
      </View>
      <View style={styles.WrapOut}>
        <View style={styles.wrapIn}>
          <Image source={Transfer} />
          <Text style={styles.textSty}>Transfer</Text>
        </View>
        <View style={styles.wrapIn}>
          <Image source={Buy} />

          <Text style={styles.textSty}>Buy</Text>
        </View>
        <View style={styles.wrapIn}>
          <Image source={Link} />

          <Text style={styles.textSty}>Link</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    // height: win.height,
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
  dropText: {
    color: "white",
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 3,
    marginRight: win.width / 3.2,
  },
  balanceView: {
    backgroundColor: "#14254a",
    height: win.height / 4,
    marginTop: win.height / 24,
    borderRadius: win.width / 20,
  },
  topCont: {
    height: win.height / 6,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 20,
  },
  imgSize: {
    height: win.height / 25,
    width: win.width / 25,
  },
  balanceText: {
    color: "gray",
    fontSize: win.width / 20,
    marginTop: win.height / 20,
  },
  currImg: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: win.height / 20,
  },
  currText: {
    color: "#FFC107",
    fontSize: win.width / 24,
    marginLeft: win.width / 40,
  },
  balanceCurrent: {
    color: "white",
    fontSize: win.width / 22,
    marginTop: win.height / 30,
  },
  WrapOut: {
    flexDirection: "row",
    marginLeft: win.width / 10,
    marginTop: win.height / 20,
  },
  wrapIn: {
    width: win.width / 5,
    marginRight: win.width / 10,
    backgroundColor: "#7898FBA6",
    height: win.height / 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textSty: {
    color: "white",
    fontSize: win.height / 45,
  },
});
export default WalletScreen2;
