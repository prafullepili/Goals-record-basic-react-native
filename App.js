import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GaolItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGaolText) {
    setCourseGoals((prevState) => [
      { text: enteredGaolText, id: Math.random().toString() },
      ...prevState,
    ]);
    // endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    // console.log("DELETE");
    setCourseGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
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
            ListEmptyComponent={
              <Text style={styles.noGoals}>No Goals, Add New Goals</Text>
            }
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
        <View style={styles.addNewGoal}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
          onAddGoal={addGoalHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#1e085a",
    paddingTop: 50,
  },
  noGoals: {
    color: "lightgray",
    alignSelf: "center",
    fontSize: 20,
    paddingTop: 20,
  },
  goalsContainer: {
    flex: 10,
  },
  addNewGoal: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
