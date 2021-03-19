import React from "react";
import {
  View,
  Text,
  Modal,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import Header from "../components/Header";
import InfoList from "../components/InfoList";
const MyProfile = props => {
  const { visible, closeProfile } = props;
  return (
    <Modal visible={visible}>
      <SafeAreaView style={styles.cont}>
        <Header crossPressed={() => closeProfile()} title="Profile" />
        <ScrollView>
          <View style={styles.cardCont}>
            <View style={styles.profileCard}>
              <View style={styles.nameCont}>
                <View style={styles.imgCont}>
                  <Image
                    resizeMode="contain"
                    borderRadius={50}
                    style={styles.img}
                    source={require("../../assets/icons/profile.jpg")}
                  />
                </View>
                <Text style={styles.title}>James Vince</Text>
              </View>
              <View style={styles.tripsCont}>
                <View style={styles.left}>
                  <Text style={styles.years}> 2000 Trips</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.years}> 2.5 Years</Text>
                </View>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>PERSONAL INFO</Text>
              <View style={styles.infolist}>
                <InfoList
                  title="+090078601"
                  infoPressed={() => console.log("info pressed")}
                />
              </View>
              <View style={styles.infolist}>
                <InfoList
                  title="app123@gmail.com"
                  infoPressed={() => console.log("info pressed")}
                />
              </View>
              <View style={styles.infolist}>
                <InfoList
                  title="St#20 2404, New York"
                  infoPressed={() => console.log("info pressed")}
                />
              </View>
              <View style={styles.infolist}>
                <InfoList
                  title="English and Urdu"
                  infoPressed={() => console.log("info pressed")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#eee",
    flex: 1
  },
  profileCard: {
    height: 200,
    width: "90%",
    borderRadius: 15,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { height: 5, width: 5 },
    backgroundColor: "#fff",
    marginTop: 40,
    backgroundColor: "orange"
  },
  cardCont: {
    alignItems: "center"
  },
  nameCont: {
    height: "60%",
    alignItems: "center"
  },
  img: {
    width: 100,
    height: 100
  },
  imgCont: {
    borderRadius: 50,
    position: "absolute",
    top: -35
  },
  title: {
    fontSize: 30,
    position: "absolute",
    top: 80
  },
  tripsCont: {
    borderTopWidth: 1,
    flexDirection: "row",
    height: "40%"
  },
  left: {
    flex: 1,
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  years: {
    fontSize: 20
  },
  infoTitle: {
    fontSize: 30
  },
  info: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  infolist: {
    marginVertical: 10
  }
});

export default MyProfile;
