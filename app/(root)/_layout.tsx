import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React from "react";
import { useGlobalContext } from "@/hooks/global-provider";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
  const { isLogged, loading } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) return <Redirect href="/sign-in" />;

  return <Slot />;
}
