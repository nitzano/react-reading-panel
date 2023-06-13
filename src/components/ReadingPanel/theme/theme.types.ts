export interface Theme {
    bgLightColor: string;
    fgLightColor: string;
    bgDarkColor: string;
    fgDarkColor: string;
    defaultTheme: "light" | "dark";
  }
  
  export const defaultTheme: Theme = {
    defaultTheme: "light",
    bgLightColor: "#ffffff",
    fgLightColor: "#000000",
    fgDarkColor: "#ffffff",
    bgDarkColor: "#000000",
  };