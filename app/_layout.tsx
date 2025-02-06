import { Slot } from "expo-router";
import React from "react";
import { ThemeProvider } from "../src/contexts/ThemeContext";

function _layout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}

export default _layout;
