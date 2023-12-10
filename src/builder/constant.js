export const COMPONENT_TYPES = {
  fancyH1: "fancy-h1",
  flexTest: "flex-test",
};

export const STYLE_MANAGER_SECTORS = [
  {
    name: "General",
    open: false,
    properties: [
      "display",
      "float",
      "position",
      "top",
      "right",
      "left",
      "bottom",
    ],
  },
  {
    name: "Dimension",
    open: false,
    properties: [
      "width",
      "height",
      "max-width",
      "min-height",
      "margin",
      "padding",
    ],
  },
  {
    name: "Typography",
    open: false,
    properties: [
      "font-family",
      "font-size",
      "font-weight",
      "letter-spacing",
      "color",
      "line-height",
      "text-align",
      "text-shadow",
    ],
  },
  {
    name: "Decorations",
    open: false,
    properties: [
      "background-color",
      "border-radius",
      "border",
      "box-shadow",
      "background",
    ],
  },
  {
    name: "Extra",
    open: false,
    properties: ["opacity", "transition", "transform"],
  },
  {
    name: "Flex",
    open: false,
    properties: [
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-items",
      "align-content",
      "order",
      "flex-basis",
      "flex-grow",
      "flex-shrink",
      "align-self",
    ],
  },
];
