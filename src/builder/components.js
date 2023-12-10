import { COMPONENT_TYPES } from "./constant";

export default (editor, opts = {}) => {
  const domComp = editor.DomComponents;
  domComp.addType(COMPONENT_TYPES.fancyH1, {
    model: {
      defaults: {
        tagName: "div",
        traits: [
          "name",
          { name: "id", value: "h1-test-id" },
          { type: "checkbox", name: "readonly", value: true },
        ],
        attributes: { title: "fancy h1 tooltip", class: "fancy-h1" },
        components: [
          {
            tagName: "h1",
            components: "Header test",
          },
          {
            tagName: "p",
            components: "paragraph test for more data",
            attributes: { class: "text-success" },
          },
        ],
        styles: `
            .fancy-h1 {background-color: #eee; padding: 12px}
            .fancy-h1 h1 {color: red}
            @media (max-width: 992px) {
                .fancy-h1 h1 {color: brown}
            }
            @media (max-width: 768px) {
                .fancy-h1 h1 {color: blue}
            }
            @media (max-width: 310px) {
                .fancy-h1 h1 {color: green}
            }
        `,
      },
    },
    view: {},
  });

  domComp.addType(COMPONENT_TYPES.flexTest, {
    model: {
      defaults: {
        tagName: "div",
        attributes: { title: "Flex 3", class: "flex3" },
        components: [
          {
            tagName: "div",
            components: "One",
          },
          {
            tagName: "div",
            components: "Two",
          },
          {
            tagName: "div",
            components: "Three",
          },
        ],
        styles: `
            .flex3 {background-color: #545454; color: #f60; display: flex; justify-content: space-between;}
            .flex3 div {padding: 12px; }
            
        `,
      },
    },
    view: {},
  });
};
