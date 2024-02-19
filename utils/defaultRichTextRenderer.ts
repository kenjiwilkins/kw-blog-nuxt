import type { IRichText } from "types";
export function defaultRichTextRenderer(richTextArray: IRichText[]) {
  if (!richTextArray || !richTextArray.length) {
    return null;
  }
  const result = richTextArray.map((richText, i) => {
    const attributes = {
      style: handleAnnotationStyles(richText.annotations),
    };
    if (richText.text.link) attributes["href"] = richText.href;
    if (i < richTextArray.length - 1)
      attributes["style"]["margin-right"] = "4px";
    return h(
      richText.text.link ? "a" : "span",
      attributes,
      richText.text.content
    );
  });
  return h("span", {}, result);
}
