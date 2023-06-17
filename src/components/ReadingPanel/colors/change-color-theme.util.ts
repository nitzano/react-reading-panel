import { ColorSettings, Theme } from "../settings/settings.types";

export function changeColorTheme(
  element: HTMLElement,
  currentTheme: Theme,
  colorSettings: ColorSettings
) {
  if (!element) throw new Error("no element");

  if (currentTheme === "light") {
    element.style.background = colorSettings.bgDarkColor;
    element.style.color = colorSettings.fgDarkColor;
  } else {
    element.style.background = colorSettings.bgLightColor;
    element.style.color = colorSettings.bgDarkColor;
  }
}
