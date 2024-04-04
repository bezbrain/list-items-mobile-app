import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
        <Image
          source={require("../assets/images/th.jpg")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal"
          onChangeText={goalInputHandle}
          value={isTextObj}
          style={styles.textInput}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
        <Button
          title="Close"
          color="red"
          onPress={() => {
            setIsModal(false);
            setIsError("");
          }}
        />
        <ErrorMsg isError={isError} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#0ff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 100,
    margin: 20,
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
