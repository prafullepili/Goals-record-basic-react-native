import { View, StyleSheet, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <Pressable
      // android_ripple={{ color: "black" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 16,
    marginVertical: 5,
    borderRadius: 6,
    backgroundColor: "green",
    color: "white",
  },
  pressedItem: {
    opacity: 0.9,
  },
  goalText: {
    padding: 20,
    color: "#fff",
  },
});
