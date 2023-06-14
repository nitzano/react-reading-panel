export function getStyleProp(element: HTMLElement, styleKey: string): string {
    return window
    .getComputedStyle(element, null)
    .getPropertyValue(styleKey);
}