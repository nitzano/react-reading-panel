
export function decreaseFont(element: HTMLElement, fontUnits: string, fontChange: number ) {
    const style = window
    .getComputedStyle(element, null)
    .getPropertyValue("font-size");
  const fontSize = parseFloat(style);
  element.style.fontSize = `${fontSize - fontChange}${fontUnits}`;
}