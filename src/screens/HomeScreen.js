import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import DefaultButton from "./../components/DefaultButton";
import DefaultIcon from "../components/DefaultIcon";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MyProfile from "./MyProfile";

const GOOGLEMAPSAPIKEY = "AIzaSyDEFOdFlZKTCh_ztHWDrARpUU2ukvcDPD8";
const HomeScreen = props => {
  const [start, setStart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isLocationLoaded, setisLocationLoaded] = useState(false);
  const [region, setRegion] = useState({
    latitude: 32.78825,
    longitude: 73.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [destination, setDestination] = useState({
    latitude: 36.78825,
    longitude: 78.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  useEffect(() => {
    getUserLocation();
    locationUpdate();
  }, []);

  const locationUpdate = async () => {
    let options = {
      accuracy: Location.Accuracy.Balanced,
      timeInterval: 1000,
      distanceInterval: 1
    };
    await Location.watchPositionAsync(options, loc => {
      console.log("location is");
      //console.log(loc.coords);
      const { coords } = loc;

      const { latitude, longitude } = coords;
      const userlocation = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };
      setRegion(userlocation);
    });
  };
  const getUserLocation = async () => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => {
        if (status !== "granted") {
          alert("Please enable location first");
        } else {
          Location.getCurrentPositionAsync({
            enableHighAccuracy: true
          })
            .then(location => {
              const { coords } = location;

              const { latitude, longitude } = coords;
              const loc = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              };
              setRegion(loc);
              setisLocationLoaded(true);
            })
            .catch(error => {
              console.log("error is", error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.home}>
      <ActivityIndicator
        animating={!isLocationLoaded}
        color="blue"
        style={styles.loading}
      />
      <MapView
        zoomEnabled
        region={region}
        style={styles.map}
        initialRegion={region}
      >
        {isLocationLoaded && (
          <Marker coordinate={region}>
            <Image
              style={styles.marker}
              source={require("../../assets/icons/logistics.png")}
            />
          </Marker>
        )}
      </MapView>
      <View style={styles.sidebar}>
        <DefaultIcon
          image={require("../../assets/icons/sidebar.png")}
          pressed={() => props.navigation.openDrawer()}
        />
      </View>
      <View style={styles.profile}>
        <DefaultIcon
          image={require("../../assets/icons/profile.jpg")}
          pressed={() => setShowProfile(true)}
        />
      </View>

      <DefaultButton
        titleStyle={styles.price}
        style={styles.priceBtn}
        title="Rs 950"
      />
      {!start && (
        <DefaultButton
          onPress={() => setStart(true)}
          style={styles.goBtn}
          title="GO"
          titleStyle={styles.btnTitle}
        />
      )}
      {start && (
        <DefaultButton
          onPress={() => setStart(false)}
          style={[styles.goBtn, styles.stopBtn]}
          title="STOP"
          titleStyle={styles.btnTitle}
        />
      )}
      <MyProfile
        closeProfile={() => setShowProfile(false)}
        visible={showProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center"
  },
  goBtn: {
    marginTop: 10,
    position: "absolute",
    bottom: "5%",
    zIndex: 100,
    width: 100,
    height: 100,
    borderRadius: 50
  },
  map: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("screen").height
  },
  header: {
    width: "100%"
  },
  btnTitle: {
    fontSize: 25
  },
  priceBtn: {
    position: "absolute",
    top: "5%",
    zIndex: 100,
    width: 150,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white"
  },
  price: {
    fontSize: 25,
    color: "black"
  },
  sidebar: {
    position: "absolute",
    top: "5%",
    left: "2%"
  },
  profile: {
    position: "absolute",
    top: "5%",
    right: "2%",
    borderRadius: 25
  },
  loading: {
    position: "absolute",
    top: "40%",
    borderRadius: 25,
    zIndex: 100
  },
  stopBtn: {
    backgroundColor: "red"
  },
  marker: {
    width: 40,
    height: 40
  }
});

export default HomeScreen;
