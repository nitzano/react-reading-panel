import { getStyleProp } from "../utils/get-style-prop.util";

export function increaseLineHeight(
  element: HTMLElement,
  lineHeightUnits: string,
  lintHeightStep: number,
  defaultLineHeight: string
) {
  const style = getStyleProp(element, "line-height");
  const styleValue = parseFloat(style);
  if (!styleValue) {
    element.style.lineHeight = defaultLineHeight;
  }
  element.style.lineHeight = `${styleValue + lintHeightStep}${lineHeightUnits}`;
}
