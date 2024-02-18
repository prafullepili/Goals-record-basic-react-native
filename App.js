import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GaolItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  function addGoalHandler(enteredGaolText) {
    setCourseGoals((prevState) => [
      { text: enteredGaolText, id: Math.random().toString() },
      ...prevState,
    ]);
  }
  function deleteGoalHandler(id) {
    // console.log("DELETE");
    setCourseGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    paddingTop: 45,
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 10,
  },
});
