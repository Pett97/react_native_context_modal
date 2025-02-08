import { StyleSheet } from "react-native";
import ThemeType from "./themeTipe";

const globalStyle = (THEME:ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      width: "100%",
      backgroundColor: THEME.primary,
    },
    title: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 4,
      color: THEME.secondary,
      width: "100%",
    },
    link:{
      backgroundColor: THEME.tertiary,
      fontSize:17,
      fontWeight:"bold"
    }
  });

  export default globalStyle;
