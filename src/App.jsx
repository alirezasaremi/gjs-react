import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import LocalPlugins from "./plugins";
import loadComponents from "./builder/components";
import loadBlocks from "./builder/blocks";
import loadPanels from "./builder/panels";
import { STYLE_MANAGER_SECTORS } from "./builder/constant";
import PageModal from "./builder/modal/PageModal";

const App = () => {
  const localPlugins = LocalPlugins();
  const sectors = STYLE_MANAGER_SECTORS;
  const projectID = 1;
  const projectEndpoint = `http://localhost:3000/projects/${projectID}`;
  const [editor, setEditor] = useState(null);


  const selectPage = (page) =>{
    console.log(page.id)
  }
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
      styleManager: {
        sectors: sectors,
      },
      pageManager: {
        pages: [
          {
            id: "my-first-page",
            styles: ".my-page1-el { color: red }",
            component: '<div class="my-page1-el">Page 1</div>',
          },
          {
            id: "my-second-page",
            styles: ".my-page2-el { color: blue }",
            component: '<div class="my-page2-el">Page 2</div>',
          },
        ],
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

      const pageManager = editor.Pages;
      console.log("pages", pageManager.getAll());
      panelManager.addButton("options", {
        id: "modal-pages",
        className: "fa fa-file",
        command(editor) {
          editor.Modal.setTitle("Pages").setContent(<PageModal />).open();
            // .setContent(
            //   `<div><ul>${pageManager.getAll().map((page) => {
            //     return `<li onClick=${console.log(page.id)}>${page.id}</li>`;
            //   })}</ul></div>`
            // )
            // .open();
        },
        active: false,
      });

      // console.log(panelManager.getPanels().models);
    }
  }, [editor]);

  return (
    <div className="main">
      <div id="editor"></div>
    </div>
  );
};

export default App;
