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
      <View>
        <Button title="Trocar Tema" onPress={toggleTheme} />
        <Text style={globalStyle(theme).title}>Apenas um Texto De exemplo</Text>
      </View>
      <View>
        <Link style={globalStyle(theme).link} href="/teste">
          <Text style={globalStyle(theme).title}>Teste Card Galio FrameWork</Text>
        </Link>
      </View>
      <View>
        <Link style={globalStyle(theme).link} href="/testeModal">
          <Text style={globalStyle(theme).title}>Campos</Text>
        </Link>
      </View>
    </View>
  );
}

export default index;
