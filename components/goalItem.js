import { Text, Pressable, StyleSheet, View } from "react-native";

const GoalItem = ({ deleteGoalHandler, id, text }) => {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#2fdff2" }} // This is like a "after press" effect for android
        onPress={() => deleteGoalHandler(id)}
        style={({ pressed }) => pressed && styles.pressItem} // This "after press" effect could be used for both iPhone and Android
      >
        <Text style={styles.goalItem}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    backgroundColor: "#eee",
    marginVertical: 5,
  },
  goalItem: {
    padding: 10,
    fontSize: 25,
  },
  pressItem: {
    opacity: 0.5,
    backgroundColor: "red",
  },
});
