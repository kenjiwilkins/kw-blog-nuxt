import type { VNode, RendererNode, RendererElement } from "vue";

export interface BlockRendererProps {
  blocks: IBlock[];
}

export interface AnnotationRenderer {
  [key: string]: (annotation: IAnnotations) => any;
}

export interface IRichTextProps {
  blocks: IBlock[];
  blockRenderers?: IBlockRenderer;
  annotationRenderers?: any;
}

// IBlocks has no properties in common with IHeading1, IHeading2, IHeading3, IParagraph, IBulletedListItem, INumberedListItem.
export interface IBlock {
  type: string;
  heading_1?: IHeading1;
  heading_2?: IHeading2;
  heading_3?: IHeading3;
  paragraph?: IParagraph;
  bulleted_list_item?: IBulletedListItem;
  numbered_list_item?: INumberedListItem;
  to_do?: IToDo;
  divider?: IDivider;
}

export const IBLOCKS = {
  heading_1: "heading_1",
  heading_2: "heading_2",
  heading_3: "heading_3",
  paragraph: "paragraph",
  bulleted_list_item: "bulleted_list_item",
  numbered_list_item: "numbered_list_item",
  to_do: "to_do",
  divider: "divider",
};

export interface IRichText {
  type: "text";
  text: IText;
  annotations: IAnnotations;
  href?: string;
}

export interface IAnnotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface IText {
  content: string;
  link: null;
}

export interface IHeading1 {
  type: "heading_1";
  heading_1: {
    rich_text?: IRichText[];
  };
  plain_text: string;
}

export interface IHeading2 {
  type: "heading_2";
  heading_2: {
    rich_text?: IRichText[];
  };
  plain_text: string;
}

export interface IHeading3 {
  type: "heading_3";
  heading_3: {
    rich_text?: IRichText[];
  };
  plain_text: string;
}

export interface IParagraph {
  type: "paragraph";
  paragraph: {
    rich_text?: IRichText[];
  };
  plain_text: string;
}

export interface IBulletedListItem {
  type: "bulleted_list_item";
  bulleted_list_item: {
    rich_text?: IRichText[];
  };
  plain_text: string;
}

export interface INumberedListItem {
  type: "numbered_list_item";
  numbered_list_item: {
    rich_text?: IRichText[];
  };
  plain_text: string;
}

export interface IToDo {
  type: "to_do";
  to_do: {
    rich_text?: IRichText[];
    checked: boolean;
  };
  plain_text: string;
  checked: boolean;
}

export interface IDivider {
  type: "divider";
  divider: {};
}

export interface IBlockRenderer {
  [key: string]: (block: IBlock, key: string, next: VNode) => VNode | any;
}
