import type { CSSProperties } from "vue";
import type { IAnnotations } from "types";

export const defaultFontStyle = {
  "font-family": `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`,
  "caret-color": "rgb(55, 53, 47)",
};

export function handleAnnotationStyles(
  annotation: IAnnotations
): CSSProperties {
  const styles = {
    ...defaultFontStyle,
  } as CSSProperties;
  if (annotation.bold) {
    styles["font-weight"] = "bold";
  }
  if (annotation.italic) {
    styles["font-style"] = "italic";
  }
  if (annotation.underline) {
    styles["text-decoration"] = "underline";
  }
  if (annotation.strikethrough) {
    styles["text-decoration"] = "line-through";
  }
  if (annotation.code) {
    styles["font-family"] = "monospace";
  }
  if (annotation.color) {
    styles["color"] = annotation.color;
  }
  return styles;
}
