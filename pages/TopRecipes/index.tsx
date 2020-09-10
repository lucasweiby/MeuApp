import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { recipes as loadingRecipes } from "../../src/services/api";
import CardFood from "../../components/CardFood";
import Filter from "../../components/Filter";
import styles from "./styles";

interface Response {
  hits: Recipe[];
}

interface Recipe {
  recipe: {
    image: string;
    label: string;
    yield: number;
    uri: string;
  };
}

export default function TopRecipes() {
  const [recipes, setRecipes] = useState<Response>({} as Response);
  const [loading, setLoading] = useState(false);

  async function getRecipes() {
    setLoading(true);
    try {
      const myRecipes = await loadingRecipes();
      setRecipes(myRecipes.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getRecipes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Top Recipes</Text>
      <View style={styles.scrollView}>
        <FlatList
          data={["Vegan", "Low Carb", "Under 500 Calories", "With Fruits"]}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
          renderItem={({ item }) => {
            return <Filter label={item} />;
          }}
        />
        <FlatList
          data={recipes.hits}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.recipe.uri}
          renderItem={({ item: recipe }) => {
            return (
              <CardFood
                name={recipe.recipe.label}
                banner={recipe.recipe.image}
                countPeople={recipe.recipe.yield}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
