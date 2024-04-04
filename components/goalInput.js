import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import ErrorMsg from "./errorMsg";

const GoalInput = ({
  isTextObj,
  setIsTextObj,
  setIsError,
  allGoals,
  setAllGoals,
  setIsSuccess,
  setIsModal,
  isError,
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

    setIsModal(false);

    setIsSuccess("Goal added successfully");

    setTimeout(() => {
      setIsSuccess("");
    }, 3000);
    setIsTextObj("");
  };

  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          onChangeText={goalInputHandle}
          value={isTextObj}
          style={styles.textInput}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
        <ErrorMsg isError={isError} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
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
