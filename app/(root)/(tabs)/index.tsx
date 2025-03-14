import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl text-blue-500 mb-4">Welcome ReState!</Text>
    </View>
  );
}
