import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No of Orders</Text>
      <View style={styles.line} />
      <View style={styles.buttonWrap}>
        <Text style={styles.buttonText}>No. Of Orders</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f7",
  },
  boxWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  durationBox: {
    width: 30,
    height: 30,
    backgroundColor: "#0a7386",
    borderRadius: 5,
  },
  TextDurationBox: {
    width: 100,
    height: 30,
    backgroundColor: "#0a7386",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonWrap: {
    width: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#344955",
  },
  durationBoxText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#0a7386",
    padding: 6,
    marginVertical: 10,
  },
  buttonTextHidden: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    padding: 8,
    borderRadius: 8,
    marginVertical: 10,
    marginRight: 40,
  },
  line: {
    height: 1,
    backgroundColor: "#000",
    width: "100%",
    marginBottom: 5,
  },
});
