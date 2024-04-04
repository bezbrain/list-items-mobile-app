import { StyleSheet, Text } from "react-native";

const ErrorMsg = ({ isError }) => {
  return <>{isError && <Text style={styles.errorText}>{isError}</Text>}</>;
};

export default ErrorMsg;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
});
