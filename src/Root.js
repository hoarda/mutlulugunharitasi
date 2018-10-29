import React, { Component } from "react";
import { Text, View } from "react-native";
import { Router, Scene, Actions } from "react-native-router-flux";

class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="Root">
          <Scene key="Form" component initial />
        </Scene>
      </Router>
    );
  }
}
