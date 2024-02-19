import { h, type VNode } from "vue";
import { IBLOCKS, type IRichText, type IBlock } from "types";
import { handleAnnotationStyles } from "utils/defaultAnnotationRenderer";

export let customAnnotationRenderers = null;

export const defaultBlockRenderers = {
  [IBLOCKS.heading_1]: (block: IBlock, next: VNode) => {
    return h(
      "h1",
      {
        style: {
          "font-size": "1.875em",
        },
      },
      next
    );
  },
  [IBLOCKS.heading_2]: (block: IBlock, next: VNode) => {
    return h(
      "h2",
      {
        style: {
          "font-size": "1.5em",
        },
      },
      next
    );
  },
  [IBLOCKS.heading_3]: (block: IBlock, next: VNode) => {
    return h(
      "h3",
      {
        style: {
          "font-size": "1.25em",
        },
      },
      next
    );
  },
  [IBLOCKS.paragraph]: (block: IBlock, next: VNode) => {
    return h(
      "p",
      {
        style: {
          "font-size": "1em",
          "word-wrap": "break-word",
          "white-space": "pre-wrap",
        },
      },
      next
    );
  },
  [IBLOCKS.bulleted_list_item]: (block: IBlock, next: VNode) => {
    const childeLi = h("li", { style: { padding: "0.25em  0" } }, next);
    return h(
      "ul",
      {
        style: {},
      },
      childeLi
    );
  },
  [IBLOCKS.numbered_list_item]: (block: IBlock, next: VNode) => {
    const childeLi = h("li", { style: { padding: "0.25em  0" } }, next);
    return h(
      "ol",
      {
        style: {},
      },
      childeLi
    );
  },
  [IBLOCKS.to_do]: (block: IBlock, next: VNode) => {
    const checkBox = h("input", {
      type: "checkbox",
      style: {
        boxSizing: "border-box",
        height: "16px",
        width: "16px",
        border: block.to_do?.checked ? "none" : "1px solid black",
        backgroundColor: block.to_do?.checked ? "rgb(35, 131, 226)" : "white",
      },
      checked: block.to_do?.checked,
    });
    const checkBoxTextStyle = {
      textDecoration: block.to_do?.checked
        ? "line-through rgba(55, 53, 47, 0.25)"
        : "none",
      color: block.to_do?.checked ? "rgba(55, 53, 47, 0.65)" : "inherit",
    };
    const checkBoxTextArea = h(
      "div",
      { style: { ...checkBoxTextStyle, padding: "0.25em  0" } },
      next
    );
    return h(
      "div",
      {
        style: {
          display: "flex",
          gap: "0.5em",
          alignItems: "center",
        },
      },
      [checkBox, checkBoxTextArea]
    );
  },
  [IBLOCKS.divider]: (block, next) => {
    return h("hr", {
      style: { width: "100%", color: "rgba(55, 53, 47, 0.16)" },
    });
  },
  text: (richTextArray: IRichText[], annotationRenderer) => {
    if (!richTextArray.length) {
      return null;
    }
    const result = richTextArray.map((richText, i) => {
      h(
        "span",
        {
          style: handleAnnotationStyles(richText.annotations),
        },
        richText.text.content
      );
    });
    return h("span", {}, result);
  },
};
