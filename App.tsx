/* eslint-disable no-use-before-define */
import React from "react";

import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Provider } from "react-redux";

import store from "./src/redux/store/configureStore.store";

import { Box, InputGroup } from "./src/components";

export default function App() {
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <InputGroup verticalAlign="Top" />
          <Box />
          <InputGroup verticalAlign="Bottom" />
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
