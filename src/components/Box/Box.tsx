import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectBorderPosition } from "../Input/InputSelectors";

const Box = () => {
  const borders = useSelector(selectBorderPosition);

  const styles = StyleSheet.create({
    container: {
      width: "90%",
      height: 200,
      backgroundColor: "#ccc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: borders.borderBottomLeftRadius,
      borderBottomRightRadius: borders.borderBottomRightRadius,
      borderTopLeftRadius: borders.borderTopLeftRadius,
      borderTopRightRadius: borders.borderTopRightRadius,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Change my border-radius</Text>
    </View>
  );
};

export default Box;
