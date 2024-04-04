import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/goalInput";
import SuccessMsg from "./components/successMsg";
import GoalItem from "./components/goalItem";

export default function App() {
  const [isTextObj, setIsTextObj] = useState("");
  const [allGoals, setAllGoals] = useState([]);
  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const [isModal, setIsModal] = useState(false);

  const deleteGoalHandler = (id) => {
    const remainingGoals = allGoals.filter((each) => each.id !== id);
    setAllGoals(remainingGoals);
    setIsSuccess("Goal removed successfully");
    setTimeout(() => {
      setIsSuccess("");
    }, 3000);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Item" onPress={() => setIsModal(true)} />
      {isModal && (
        <GoalInput
          setIsError={setIsError}
          setIsTextObj={setIsTextObj}
          isTextObj={isTextObj}
          allGoals={allGoals}
          setAllGoals={setAllGoals}
          setIsSuccess={setIsSuccess}
          setIsModal={setIsModal}
          isError={isError}
        />
      )}

      <View style={styles.listItemsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={allGoals}
          renderItem={(eachObj) => {
            // console.log(eachObj);
            return (
              <GoalItem
                deleteGoalHandler={deleteGoalHandler}
                id={eachObj.item.id}
                text={eachObj.item.text}
              />
            );
          }}
          keyExtractor={(each, index) => {
            return each.id;
          }}
        />
        <SuccessMsg isSuccess={isSuccess} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },

  listItemsContainer: {
    flex: 6,
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: "grey",
  },
});
