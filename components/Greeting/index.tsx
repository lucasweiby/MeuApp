import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  name: string;
  idade?: number;
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
});

const Greeting: React.FC<Props> = ({ name, idade }) => {
  return (
    <View style={styles.center}>
      <Text>
        Hello {name}! Age: {idade}
      </Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, { top: 50 }]}>
      <Greeting name="Rexxar" idade={20} />
      <Greeting name="Jaina" idade={12} />
      <Greeting name="Valeera" />
    </View>
  );
};

export default LotsOfGreetings;
