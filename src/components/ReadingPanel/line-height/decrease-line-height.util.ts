import { getStyleProp } from "../utils/get-style-prop.util";
import { defaultLineHeight } from "./line-height.consts";

export function decreaseLineHeight(element: HTMLElement, lineHeightUnits: string, lineHeightChange: number ) {
  const style = getStyleProp(element, "line-height");
  const styleValue = parseFloat(style);
  if (!styleValue) {
    element.style.lineHeight = defaultLineHeight;
  }
  element.style.lineHeight = `${styleValue - lineHeightChange}${lineHeightUnits}`;
}