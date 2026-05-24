
let currentTheme: "light" | "dark" = "dark";

let listeners: ((theme: "light" | "dark") => void)[] = [];

export const themeStore = {
  getTheme() {
    return currentTheme;
  },

  setTheme(theme: "light" | "dark") {
    currentTheme = theme;

    listeners.forEach((listener) => listener(theme));
  },

  subscribe(listener: (theme: "light" | "dark") => void) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
};