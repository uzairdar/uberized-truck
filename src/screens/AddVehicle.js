import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import Header from "../components/Header";
import DefaultInput from "../components/DefaultInput";
import DefaultButton from "../components/DefaultButton";

const AddVehicle = props => {
  const { closeAddVehicle, registerPressed } = props;
  return (
    <View style={styles.cont}>
      <Header crossPressed={() => closeAddVehicle()} title="Add Vehicle" />
      <ScrollView>
        <View style={styles.dataCont}>
          <DefaultInput style={styles.input} placeholder="Service Type" />
          <DefaultInput style={styles.input} placeholder="Brand" />
          <DefaultInput style={styles.input} placeholder="Model" />
          <DefaultInput style={styles.input} placeholder="Manufacturer" />
          <DefaultInput style={styles.input} placeholder="Number Plate" />
          <DefaultInput style={styles.input} placeholder="Color" />
          <DefaultButton
            onPress={() => registerPressed()}
            style={styles.btn}
            title="REGISTER"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#eee"
  },
  input: {
    height: 50,
    borderRadius: 5,
    marginTop: 30
  },
  inputCont: {
    width: "100%",
    alignItems: "center"
  },
  btn: {
    height: 50,
    borderRadius: 25,
    marginTop: 30
  },
  dataCont: {
    alignItems: "center",
    //justifyContent: "center",
    flex: 1
  }
});

export default AddVehicle;
