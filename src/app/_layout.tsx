import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { Slot } from "expo-router";
import { useEffect, useState } from "react";

import { themeStore } from "../utils/themeStore";

export default function RootLayout() {
  const [theme, setTheme] = useState<"light" | "dark">(
    themeStore.getTheme()
  );

  useEffect(() => {
    const unsub = themeStore.subscribe(setTheme);

    return unsub;
  }, []);

  return (
    <ThemeProvider
      value={theme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Slot />
    </ThemeProvider>
  );
}