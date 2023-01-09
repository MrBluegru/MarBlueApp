import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Screens

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import StackScreen from "./src/screens/StackScreen";
import RepositoryList from "./src/components/RepositoryList";

const HomeStack = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <HomeStack.Screen name="Stack" component={StackScreen} /> */}
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Repositories"
        component={RepositoryList}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialComunityIcons 
              name="home" 
              color={color} 
              size={30} 
            />
          ),
          tabBarBadge: 134,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Sign In"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Sign In",
          tabBarIcon: ({ color, size }) => (
            <MaterialComunityIcons
              name="brightness-5"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
