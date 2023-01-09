import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import RepositoryList from "../components/RepositoryList";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginVertical: "5%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        >
          Go to Stack Screen
        </Text>
      </TouchableOpacity> */}
      <RepositoryList />
    </View>
  );
};

export default HomeScreen;
