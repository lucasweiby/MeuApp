import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },

  pageTitle: {
    fontFamily: "Mulish_ExtraBold",
    textAlign: "center",
    marginTop: 24,
    fontSize: 20,
    color: "#286d65",
  },

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  estilo: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: "#fff",
  },
});

export default styles;
