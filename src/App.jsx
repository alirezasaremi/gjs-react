import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import LocalPlugins from "./plugins";
import loadComponents from "./builder/components";
import loadBlocks from "./builder/blocks";
import loadPanels from "./builder/panels";
import { STYLE_MANAGER_SECTORS } from "./builder/constant";
import { pageManagerRenderer } from "./builder/renderer/PageManager";

const App = () => {
  const localPlugins = LocalPlugins();
  const sectors = STYLE_MANAGER_SECTORS;
  const projectID = 1;
  const projectEndpoint = `http://localhost:3000/projects/${projectID}`;
  const [editor, setEditor] = useState(null);


  useEffect(() => {
    const e = grapesjs.init({
      container: "#editor",
      storageManager: false,
      pageManager: {
        pages: [
          {
            id: "home",
            styles: ".my-el { color: red }",
            component: '<div class="my-el"><h1>Home Page<div>',
          },
          {
            id: "about",
            styles: ".my-el { color: green }",
            component: '<div class="my-el"><h1>About us<div>',
          },
        ],
      },
      canvas: {
        scripts: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        ],
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        ],
      },
      showDevices: false, // set flase to customize as icon instead dropdown
      styleManager: {
        sectors: sectors,
      },
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
      loadPanels(editor);

      // add new button to desire panel
      const panelManager = editor.Panels;
      panelManager.addButton("options", {
        id: "export-as-json",
        className: "fa fa-download",
        command(editor) {
          editor.Modal.setTitle("Components JSON")
            .setContent(
              `<textarea style="width:100%; height: 250px;">${JSON.stringify(
                editor.getComponents()
              )}</textarea>`
            )
            .open();
        },
        active: false,
      });

      panelManager.addButton("options", {
        id: "page-manager-dialog",
        className: "fa fa-file",
        command(editor) {
          editor.Modal.setTitle("Page Manager")
            .setContent(pageManagerRenderer(editor))
            .open();
        },
        active: false,
      });

      console.log("models:", panelManager.getPanels().models);
    }
  }, [editor]);

  return (
    <div className="main">
      <div id="editor"></div>
    </div>
  );
};

export default App;
