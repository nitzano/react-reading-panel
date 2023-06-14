export interface ColorSettings {
    bgLightColor: string;
    fgLightColor: string;
    bgDarkColor: string;
    fgDarkColor: string;
  }
  
  export const defaultColorSettings: ColorSettings = {
    
    bgLightColor: "#ffffff",
    fgLightColor: "#000000",
    fgDarkColor: "#ffffff",
    bgDarkColor: "#000000",
  };

  export type Theme = 'light' | 'dark';


export interface Settings {
  colorSettings: ColorSettings;
  fontSizeStep: number;
  fontSizeUnits: string;
  letterSpacingChange: number;
  letterSpacingDefaultSize: string;
  letterSpacingUnit: string;
  lineHeightDefaultSize: string;
  lineHeightsStep: number
  lineHeightUnits: string;
  defaultTheme: Theme;
}  

export const defaultSettings: Settings = {
  defaultTheme: 'light',
  colorSettings: defaultColorSettings,
  fontSizeStep: 1,
  fontSizeUnits: 'px',
  letterSpacingChange: 1,
  letterSpacingDefaultSize: '1em',
  letterSpacingUnit: 'px',
  lineHeightDefaultSize: '1em',
  lineHeightsStep: 1,
  lineHeightUnits: 'px'
}