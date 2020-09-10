import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Props {
  label?: string;
  clicked?: boolean;
}

const Filter: React.FC<Props> = ({ label }) => {
  const [clicked, setClicked] = useState(false);

  function onPress() {
    setClicked(!clicked);
  }

  return (
    <TouchableOpacity
      style={[styles.container, clicked ? styles.clicked : null]}
      onPress={onPress}
    >
      <Text style={[styles.buttonLabel, clicked ? styles.clickedLabel : null]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Filter;
