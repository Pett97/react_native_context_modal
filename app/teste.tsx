import React from "react";
import { Card, Text, Button } from 'galio-framework';
import { View, StyleSheet } from "react-native";
import { useTheme } from "../src/contexts/ThemeContext";

function Teste() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, I'm a Galio component</Text>
      <Button style={styles.button}>teste</Button>
      <Card
        flex
        borderless
        title="Christopher Moon"
        caption="139 minutes ago"
        location="Los Angeles, CA"
        avatar="http://i.pravatar.cc/100?id=skater"
        image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
        style={styles.card}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    marginVertical: 10,
  },
  card: {
    marginTop: 20,
  },
});

export default Teste;
