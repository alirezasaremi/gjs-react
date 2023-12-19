import { BLOCK_CATEGORIES, COMPONENT_TYPES } from "./constant";

export default (editor, opts = {}) => {
  const blockManager = editor.BlockManager;

  blockManager.add(COMPONENT_TYPES.fancyH1, {
    category: BLOCK_CATEGORIES.basicBlocks,
    label: "Fancy H1",
    content: { type: COMPONENT_TYPES.fancyH1 },
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"/></svg>',
  });

  blockManager.add("image", {
    category: BLOCK_CATEGORIES.basicBlocks,
    label: "Image",
    content: { type: "image" },
    media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
  </svg>`,
    activate: true,
  });

  blockManager.add(COMPONENT_TYPES.flexTest, {
    category: BLOCK_CATEGORIES.advanceBlocks,
    label: "Flex 3",
    content: { type: COMPONENT_TYPES.flexTest },
    media: `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20231009123326/UX-Designer-Skills.png" width="48" />`,
  });
};
