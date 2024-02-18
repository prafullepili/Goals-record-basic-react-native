import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGaolText, setEnteredGaolText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGaolText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGaolText);
    setEnteredGaolText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        onChangeText={goalInputHandler}
        placeholder="Your course goal!"
        value={enteredGaolText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    transform: "scale(1.5)",
    alignSelf: "center",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  TextInput: {
    borderRadius: 4,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 10,
    height: 34,
  },
});
