import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import CardFood from "./components/CardFood";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CardFood name="Salada Romana" countPeople={2} />
        <CardFood name="Salada Romana" countPeople={2} />
        <CardFood name="Salada Romana" countPeople={2} />
        <CardFood name="Salada Romana" countPeople={2} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  scrollView: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});
