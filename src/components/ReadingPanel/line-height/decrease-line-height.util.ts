import { getStyleProp } from "../utils/get-style-prop.util";

export function decreaseLineHeight(element: HTMLElement, lineHeightUnits: string, lineHeightChange: number ) {
  const style = getStyleProp(element, "line-height");
  const styleValue = parseFloat(style);
  element.style.lineHeight = `${styleValue - lineHeightChange}${lineHeightUnits}`;
}