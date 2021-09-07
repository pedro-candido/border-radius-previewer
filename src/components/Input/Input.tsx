import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {
  modifyLeftBottom,
  modifyLeftTop,
  modifyRightBottom,
  modifyRightTop,
} from "../../redux/reducers/borders.reducer";

import { InputProps } from "./InputInterfaces";

import { selectBorderPosition } from "./InputSelectors";

const Input = ({ position }: InputProps) => {
  const [focus, setFocus] = useState(false);
  let borderStyle;
  const dispatch = useDispatch();
  const value = useSelector(selectBorderPosition)[position];
  const handleChangeText = (event: HTMLInputElement) => {
    if (position === "borderTopRightRadius")
      dispatch(modifyRightTop(Number(event)));
    if (position === "borderTopLeftRadius")
      dispatch(modifyLeftTop(Number(event)));
    if (position === "borderBottomRightRadius")
      dispatch(modifyRightBottom(Number(event)));
    if (position === "borderBottomLeftRadius")
      dispatch(modifyLeftBottom(Number(event)));
  };

  const styles = StyleSheet.create({
    input: {
      borderColor: "#ccc",
      borderWidth: 2,
      padding: 10,
      borderRadius: 5,
    },
  });

  position === "borderTopRightRadius" &&
    (borderStyle = StyleSheet.create({
      container: {
        position: "absolute",
        bottom: 0,
        left: 100,
        display: "flex",
        minWidth: 90,
        maxWidth: 90,
        marginBottom: 5,
      },
    }));

  position === "borderTopLeftRadius" &&
    (borderStyle = StyleSheet.create({
      container: {
        position: "absolute",
        bottom: 0,
        right: 100,
        display: "flex",
        minWidth: 90,
        maxWidth: 90,
        marginBottom: 5,
      },
    }));

  position === "borderBottomLeftRadius" &&
    (borderStyle = StyleSheet.create({
      container: {
        position: "absolute",
        top: 0,
        right: 100,
        display: "flex",
        textAlign: "left",
        minWidth: 90,
        maxWidth: 90,
        marginTop: 5,
      },
    }));

  position === "borderBottomRightRadius" &&
    (borderStyle = StyleSheet.create({
      container: {
        position: "absolute",
        top: 0,
        left: 100,
        display: "flex",
        minWidth: 90,
        maxWidth: 90,
        marginTop: 5,
      },
    }));

  return (
    <View style={borderStyle?.container}>
      <Text>{position}</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={String(value)}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default Input;
