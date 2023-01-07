import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
// import { Redirect, Route, Switch } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <AppBar /> */}
      <RepositoryList />
      {/* <Text>Working on it</Text> */}
      {/* <Switch>
        <Route path='/' exact>
        </Route>
        <Route path='/signin' exact>
        </Route>
        <Redirect to='/' />
      </Switch> */}
    </View>
  );
};

export default Main;
