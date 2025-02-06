import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../src/contexts/ThemeContext";
import globalStyle from "../styles/globalStyle";

function Teste() {
  const { theme } = useTheme();

  return (
    <View style={globalStyle(theme).container}>
      <Text style={globalStyle(theme).title}>
        Aqui eu devo ter "herdado" o tema
      </Text>
    </View>
  );
}

export default Teste;
