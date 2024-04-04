import { StyleSheet, Text } from "react-native";

const SuccessMsg = ({ isSuccess }) => {
  return (
    <Text
      style={{
        color: "green",
        textAlign: "right",
        fontWeight: 700,
        marginVertical: 10,
      }}
    >
      {isSuccess}
    </Text>
  );
};

export default SuccessMsg;

const styles = StyleSheet.create({
  //
});
