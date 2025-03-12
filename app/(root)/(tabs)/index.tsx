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
      <Text className="text-2xl text-blue-500 mb-4">Welcome here!</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/properties/2">Property</Link>
      <Link href="/profile">Profile</Link>
    </View>
  );
}
