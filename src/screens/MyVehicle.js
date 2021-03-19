import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import VehicleList from "../components/VehicleList";
import DefaultButton from "../components/DefaultButton";
import AddVehicle from "./AddVehicle";

const MyVehicle = props => {
  const [showAddVehicle, setShowAddVehicle] = useState(true);
  return (
    <SafeAreaView style={styles.cont}>
      {showAddVehicle && (
        <View style={styles.innerCont}>
          <Header
            crossPressed={() => props.navigation.navigate("Home")}
            title="My Vehicle"
          />
          <ScrollView>
            <VehicleList
              title="Toyota Prius"
              number="AB 1234"
              image={require("../../assets/icons/truck.jpg")}
            />
          </ScrollView>
          <View style={styles.footer}>
            <DefaultButton
              onPress={() => setShowAddVehicle(false)}
              style={styles.btn}
              title="ADD A VEHICLE"
            />
          </View>
        </View>
      )}
      {!showAddVehicle && (
        <AddVehicle
          registerPressed={() => console.log("register pressed")}
          closeAddVehicle={() => setShowAddVehicle(true)}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1
  },
  footer: {
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    height: 50,
    borderRadius: 25
  },
  innerCont: {
    flex: 1
  }
});

export default MyVehicle;
