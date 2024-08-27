import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <View style={styles.headerImage}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Security Screen</ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    left: 15,
    top: 40,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
