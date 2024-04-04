import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({
  isTextObj,
  setIsTextObj,
  setIsError,
  allGoals,
  setAllGoals,
  setIsSuccess,
}) => {
  // HANDLE INPUT FIELD
  const goalInputHandle = (enteredValue) => {
    setIsTextObj(enteredValue);
    setIsError("");
    // console.log(isTextObj);
  };

  // HANDLE BUTTON CLICK ACTION
  const addGoalHandler = () => {
    // Check if input field is empty
    if (!isTextObj) {
      setIsError("Input field cannot be empty");
      return;
    }

    const findGoal = allGoals.find((each) => each.text == isTextObj);
    if (findGoal) {
      setIsError("Goal already existed");
      return;
    }

    setAllGoals((currentAllGoals) => [
      ...currentAllGoals,
      {
        id: Date.now(),
        text: isTextObj,
      },
    ]);

    setIsSuccess("Goal added successfully");

    setTimeout(() => {
      setIsSuccess("");
    }, 3000);
    setIsTextObj("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        onChangeText={goalInputHandle}
        value={isTextObj}
        style={styles.textInput}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 10,
    paddingRight: 10,
    width: "70%",
    borderRadius: 6,
    height: 40,
  },
});
