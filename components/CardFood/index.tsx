import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  name: string;
  banner?: string;
  countPeople: number;
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    width: "100%",
    height: 300,
    marginBottom: 32,
  },

  bannerImage: {
    width: "100%",
    flex: 1,
    borderRadius: 12,
  },

  recipeTitle: {
    width: "100%",
    marginTop: 8,
    color: "#286d65",
    fontSize: 24,
    fontWeight: "bold",
  },

  recipeCount: {
    width: "100%",
    color: "#286d65",
  },
});

const CardFood: React.FC<Props> = ({ name, countPeople }) => {
  return (
    <View style={styles.center}>
      <Image
        source={require("../../assets/img/salada-romana.jpg")}
        style={styles.bannerImage}
      />
      <Text style={styles.recipeTitle}>{name}</Text>
      <Text style={styles.recipeCount}>Serve {countPeople} pessoas</Text>
    </View>
  );
};

export default CardFood;
