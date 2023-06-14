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
  defaultTheme: Theme;
  fontSizeStep: number;
  fontSizeUnits: string;
  letterSpacingDefaultSize: string;
  letterSpacingStep: number;
  letterSpacingUnit: string;
  lineHeightDefaultSize: string;
  lineHeightsStep: number
  lineHeightUnits: string;
  startOpen: boolean;
  direction: 'horizontal' | 'vertical';
}  

export const defaultSettings: Settings = {
  defaultTheme: 'light',
  colorSettings: defaultColorSettings,
  fontSizeStep: 1,
  fontSizeUnits: 'px',
  letterSpacingStep: 1,
  letterSpacingDefaultSize: '1px',
  letterSpacingUnit: 'px',
  lineHeightDefaultSize: '1rem',
  lineHeightsStep: 1,
  lineHeightUnits: 'px',
  startOpen: false,
  direction: 'horizontal'
}