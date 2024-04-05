import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  ScrollView,
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
    <ScrollView>
      <Modal animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/OIP.jpg")}
            style={styles.image}
          />
          <TextInput
            placeholder="Your course goal"
            onChangeText={goalInputHandle}
            value={isTextObj}
            style={styles.textInput}
          />
          <View style={styles.btnsContainer}>
            <Button title="Add Goal" onPress={addGoalHandler} />
            <Button
              title="Close"
              color="red"
              onPress={() => {
                setIsModal(false);
                setIsError("");
              }}
            />
          </View>
          <ErrorMsg isError={isError} />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#fcfcfc",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "95%",
    height: 200,
    margin: 20,
    borderRadius: 10,
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
  btnsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});
