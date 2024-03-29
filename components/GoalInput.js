import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Text,
  Image,
} from "react-native";
import { useEffect, useState } from "react";

export default function GoalInput(props) {
  const [enteredGaolText, setEnteredGaolText] = useState("");
  const [isValid, setIsValid] = useState(undefined);

  useEffect(() => {
    if (enteredGaolText) setIsValid(true);
  }, [enteredGaolText]);
  function goalInputHandler(enteredText) {
    setEnteredGaolText(enteredText);
  }

  function addGoalHandler() {
    if (!enteredGaolText) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredGaolText);
    setEnteredGaolText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        {!isValid && <Text style={styles.warningText}>Enter</Text>}
        <TextInput
          style={[
            styles.TextInput,
            {
              borderWidth: 5,
              borderColor: `${!isValid ? "red" : "green"}`,
            },
          ]}
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
          value={enteredGaolText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#b180f0"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 20,
  },
  warningText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 17,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    fontSize: 22,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button: {
    marginHorizontal: 16,
    width: 150,
    height: 50,
    justifyContent: "center",
  },
});
