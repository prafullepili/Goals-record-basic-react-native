import { View, StyleSheet, Text } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 7,
    marginVertical: 3,
    padding: 20,
    borderRadius: 6,
    // backgroundColor: "#5e0acc",
    backgroundColor: "green",
    color: "white",
  },
  goalText: {
    color: "#fff",
  },
});
