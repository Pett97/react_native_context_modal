import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Campos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Os campos de futebol são espaços projetados para a prática do esporte,
        podendo ser de grama natural, sintética ou até de terra batida, variando
        conforme o local e a estrutura disponível. Em estádios profissionais, as
        dimensões seguem padrões oficiais, enquanto em campos amadores podem ser
        adaptadas. Além das marcações tradicionais, como área do gol, meio de
        campo e linha lateral, muitos campos contam com arquibancadas e
        iluminação para jogos noturnos, tornando-se pontos de encontro para
        atletas e torcedores.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
});

export default Campos;
