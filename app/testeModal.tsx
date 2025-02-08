import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { ModalProvider, useModal } from "../src/contexts/ModalContext";
import Campos from "../src/components/Campos";

function TesteModalScreen() {
  const { show } = useModal();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => show(<Campos />)}>
        <Text style={styles.buttonText}>Mostrar Components Campos </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => show(<Text>tete texto simple </Text>)}
      >
        <Text style={styles.buttonText}>Teste</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <TesteModalScreen />
    </ModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
