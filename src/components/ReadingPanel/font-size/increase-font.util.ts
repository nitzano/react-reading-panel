import { getStyleProp } from "../utils/get-style-prop.util";

export function increseFont(element: HTMLElement, fontUnits: string, fontChange: number ) {
  const style = getStyleProp(element, "font-size");
  const fontSize = parseFloat(style);
  element.style.fontSize = `${fontSize + fontChange}${fontUnits}`;
}