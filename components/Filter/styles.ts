import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    minWidth: 128,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    marginVertical: 16,
  },

  buttonLabel: {
    color: "#286d65",
    fontFamily: "Mulish_SemiBold",
  },

  clicked: {
    backgroundColor: "#fd8e4e",
  },

  clickedLabel: {
    color: "#fff",
  },
});

export default styles;
