import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Line Of Business</Text>
      <View style={styles.line} />
      <View style={styles.durationWrap}>
        <View style={styles.durationSingleWrap}>
          <View style={styles.durationBox}></View>
          <Text style={styles.duration}>Daily</Text>
        </View>
        <View style={styles.durationSingleWrap}>
          <View style={styles.durationBox}></View>
          <Text style={styles.duration}>Month</Text>
        </View>
        <View style={styles.durationSingleWrap}>
          <View style={styles.durationBox}></View>
          <Text style={styles.duration}>Year</Text>
        </View>
      </View>
      <View style={styles.boxWrap}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Oil & Gas</Text>
          <FontAwesome5 name="chart-line" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manufacturing</Text>
          <FontAwesome5 name="chart-line" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.boxWrap}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contruction</Text>
          <MaterialCommunityIcons name="stairs-down" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Wholesale</Text>
          <MaterialCommunityIcons name="stairs-down" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.boxWrap}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Health Care</Text>
          <FontAwesome5 name="chart-line" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logistics</Text>
          <MaterialCommunityIcons name="stairs-down" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.boxWrap}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Telecom</Text>
          <MaterialCommunityIcons name="stairs-down" size={50} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Energy</Text>
          <FontAwesome5 name="chart-line" size={50} color="#fff" />
        </TouchableOpacity>
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
  duration: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#344955",
  },
  durationBox: {
    width: 20,
    height: 20,
    backgroundColor: "#0a7386",
    borderRadius: 5,
  },
  durationWrap: {
    gap: 30,
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  durationSingleWrap: {
    gap: 10,
    display: "flex",
    flexDirection: "row",
  },
  boxWrap: {
    gap: 10,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#344955",
  },
  button: {
    backgroundColor: "#0a7386",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: "42%",
    height: 115,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  line: {
    height: 1,
    backgroundColor: "#000",
    width: "100%",
    marginBottom: 5,
  },
});
