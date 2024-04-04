import { Text } from "react-native";

const ErrorMsg = ({ isError }) => {
  return (
    <>
      {isError && (
        <Text style={{ color: "red", fontWeight: 700, marginTop: -10 }}>
          {isError}
        </Text>
      )}
    </>
  );
};

export default ErrorMsg;
