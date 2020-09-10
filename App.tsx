import React from "react";
import { useFonts } from "expo-font";
import TopRecipes from "./pages/TopRecipes";

export default function App() {
  const [loaded] = useFonts({
    Mulish_Light: require("./assets/fonts/Mulish-Light.ttf"),
    Mulish_Regular: require("./assets/fonts/Mulish-Regular.ttf"),
    Mulish_SemiBold: require("./assets/fonts/Mulish-SemiBold.ttf"),
    Mulish_Bold: require("./assets/fonts/Mulish-Bold.ttf"),
    Mulish_ExtraBold: require("./assets/fonts/Mulish-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <TopRecipes />
    </>
  );
}
