import { Button, Text, View } from "react-native";

import React from "react";
import { useTheme } from "../src/contexts/ThemeContext";
import LIGHT_THEME from "../styles/lightTheme";
import DARK_THEME from "../styles/darkTheme";
import globalStyle from "../styles/globalStyle";
import { Link } from "expo-router";

function index() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <View style={globalStyle(theme).container}>
      <View >
        <Button title="Trocar Tema" onPress={toggleTheme} />
        <Text style={globalStyle(theme).title}>123123</Text>
      </View>
      <View>
        <Link href="/teste">TEst</Link>
      </View>
    </View>
  );
}

export default index;
