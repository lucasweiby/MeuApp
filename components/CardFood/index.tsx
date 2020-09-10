import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import styles from "./styles";

interface Props {
  name: string;
  banner?: string;
  countPeople: number;
}

const CardFood: React.FC<Props> = ({ name, banner, countPeople }) => {
  return (
    <View style={styles.center}>
      <Image
        source={{
          uri: banner,
        }}
        style={styles.bannerImage}
      />
      <Text style={styles.recipeTitle}>{name}</Text>
      <Text style={styles.recipeCount}>Serve {countPeople} pessoas</Text>
    </View>
  );
};

export default CardFood;
