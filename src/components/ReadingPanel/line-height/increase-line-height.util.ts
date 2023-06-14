import { getStyleProp } from "../utils/get-style-prop.util";

export function increaseLineHeight(element: HTMLElement, fontUnits: string, fontChange: number ) {
  const style = getStyleProp(element, "line-height");
  const styleValue = parseFloat(style);
  element.style.lineHeight = `${styleValue + fontChange}${fontUnits}`;
}