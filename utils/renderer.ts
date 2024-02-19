import type { VNode } from "vue";
import type { IBlock, BlockRendererProps } from "types";
import { defaultBlockRenderers } from "./defaultBlockRenderer";
import { defaultRichTextRenderer } from "./defaultRichTextRenderer";

function renderBlocks(blocks: IBlock[], renderer: any) {
  return blocks.map((block, i) => {
    return renderBlock(block, renderer);
  });
}

function renderBlock(block: IBlock, renderer: any) {
  const blockRenderer = renderer;
  if (!blockRenderer[block.type]) {
    console.warn(
      `[notion-vue-renderer] Unsupported block type "${block.type}". Please create an issue if you'd like to see it supported`
    );
    return null;
  }
  return blockRenderer[block.type](
    block,
    defaultRichTextRenderer(block[block.type].rich_text)
  );
}

function removeNulls(array: VNode[]) {
  return array.filter((item) => item !== null);
}

function formatLists(blocks: VNode[]): VNode[] {
  const output: VNode[] = [];
  const indexesToRemove: any[] = [];
  let lastBlock: VNode | null = null;
  for (const block of blocks) {
    if (lastBlock && block.type === "ul" && lastBlock.type === "ul") {
      const newUnorderedList = h("ul", { key: lastBlock.key as any }, [
        ...(lastBlock.children as VNode[]),
        ...(block.children as VNode[]),
      ]);
      output.push(newUnorderedList);
      indexesToRemove.push(output.length - 2);
      lastBlock = newUnorderedList;
    } else if (lastBlock && block.type === "ol" && lastBlock.type === "ol") {
      const newOrderedList = h(
        "ol",
        { key: lastBlock.key as any, style: { ...defaultFontStyle } },
        [...(lastBlock.children as any), ...(block.children as VNode[])]
      );
      output.push(newOrderedList);
      indexesToRemove.push(output.length - 2);
      lastBlock = newOrderedList;
    } else {
      output.push(block);
      lastBlock = block;
    }
  }
  return output.filter((item, index) => !indexesToRemove.includes(index));
}

const RichTexts = ({ blocks }: BlockRendererProps): VNode[] | void => {
  if (!blocks) {
    return console.warn("[notion-vue-renderer] No blocks provided");
  }
  const results = renderBlocks(blocks, defaultBlockRenderers);
  return removeNulls(results);
};

RichTexts.props = ["blocks"];

export default RichTexts;
