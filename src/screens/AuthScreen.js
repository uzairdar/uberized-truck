import React, { useState, useEffect } from "react";
import { View, StyleSheet, Picker } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";
import CreateProfile from "./CreateProfile";
import { RadioButton } from "react-native-paper";
const AuthScreen = (props) => {
  const [loginMode, setLoginMode] = useState(false);
  const [email, setEmail] = useState("");
  const [showCreateProfile, setShowCreateProfile] = useState(false);
  const [pin, setPin] = useState();
  const [uid, setUid] = useState();
  useEffect(() => {}, [loginMode, showCreateProfile]);
  return (
    <View style={styles.container}>
      {!loginMode ? (
        <Login
          changeScreen={(email) => {
            setEmail(email);
            // setLoginMode(false);
            setShowCreateProfile(true);
          }}
          registerUser={() => props.navigation.navigate("Home")}
          setLoginMode={setLoginMode}
        />
      ) : (
        <SignUp
          onLoginPressed={() => setShowCreateProfile(true)}
          email={email}
          registerUser={() => props.navigation.navigate("Home")}
          pin={pin}
          uid={uid}
          changeScreen={() => setLoginMode(true)}
        />
      )}

      <CreateProfile
        registerUser={() => props.navigation.navigate("Home")}
        visible={showCreateProfile}
        email={email}
        setShowCreateProfile={setShowCreateProfile}
        setLoginMode={setLoginMode}
        setPin={setPin}
        setUid={setUid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthScreen;
