import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import LocalPlugins from "./plugins";
import loadComponents from "./builder/components";
import loadBlocks from "./builder/blocks";
import loadPanels from "./builder/panels";

const App = () => {
  const localPlugins = LocalPlugins();
  const [editor, setEditor] = useState(null);

  const myNewComponentTypes = (editor) => {
    editor.DomComponents.addType("my-div-type", {
      isComponent: (el) => el.tagName === "INPUT",
      model: {
        defaults: {
          tagName: "div",
          components: [
            {
              tagName: "h1",
              components: "Header test",
            },
            "<p>Paragraph test</p>",
          ],
        },
      },
    });
  };

  useEffect(() => {
    const e = grapesjs.init({
      container: "#editor",
      storageManager: true,
      canvas: {
        scripts: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        ],
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        ],
      },
      showDevices: false, // set flase to customize as icon instead dropdown

      // plugins: [myNewComponentTypes],
    });

    setEditor(e);
  }, []);

  useEffect(() => {
    if (editor) {
      // localPlugins.map((plugin) => {
      //   editor.Blocks.add(plugin.id, {
      //     label: plugin.label,
      //     content: plugin.content,
      //     media: plugin.media,
      //   });
      // });
      loadComponents(editor);
      loadBlocks(editor);
      loadPanels(editor)
    }
  }, [editor]);

  return (
    <div className="main">
      <div id="editor"></div>
    </div>
  );
};

export default App;
