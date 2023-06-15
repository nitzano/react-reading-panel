import { getStyleProp } from "../utils/get-style-prop.util";

export function increaseLetterSpacing(
  element: HTMLElement,
  letterSpacingUnits: string,
  letterSpacingStep: number,
  defaultLetterSpacing: string
) {
  const style = getStyleProp(element, "letter-spacing");
  const styleValue = parseFloat(style);
  if (!styleValue) {
    element.style.letterSpacing = defaultLetterSpacing;
  }
  element.style.letterSpacing = `${
    styleValue + letterSpacingStep
  }${letterSpacingUnits}`;
}
