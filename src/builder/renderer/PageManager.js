export const pageManagerRenderer = (editor) => {
  const pageManager = editor.Pages;
  const pages = pageManager.getAll();
  const modal = editor.Modal;

  const elParent = document.createElement("div");
  elParent.className = "page-dialog-content";

  // show available pages
  pages.forEach((item) => {
    // card
    const pageItem = document.createElement("div");
    pageItem.className = `page-card ${
      pageManager.getSelected() === item ? "active-page" : null
    }`;

    // page name
    const pageName = document.createElement("p");
    pageName.innerText = item.id;
    pageItem.appendChild(pageName);

    const actionWrapper = document.createElement("div");
    actionWrapper.className = "page-action-wrapper";

    // add duplicate button
    const btnDuplicate = document.createElement("button");
    btnDuplicate.className = "page-card-action-btn fa fa-clone";
    btnDuplicate.onclick = function () {
      const uuid = `${item.id}-copy-${pages.length + 1}`;
      const rootComponent = item.getMainComponent();
      pageManager.add({
        id: uuid,
        component: rootComponent.toHTML(),
      });
      pageManager.select(uuid);
      if (modal.isOpen()) {
        modal.close();
      }
    };
    actionWrapper.appendChild(btnDuplicate);

    // add select button
    const btnSelect = document.createElement("button");
    btnSelect.className = "page-card-action-btn fa fa-check";
    btnSelect.onclick = function () {
      pageManager.select(item.id);
      if (modal.isOpen()) {
        modal.close();
      }
    };
    actionWrapper.appendChild(btnSelect);

    // append to parent
    pageItem.appendChild(actionWrapper);
    elParent.appendChild(pageItem);
  });

  // add blank page
  const addNewPage = document.createElement("div");
  addNewPage.className = "add-page-card";
  addNewPage.onclick = function () {
    const uuid = `Page-${pages.length + 1}`;
    pageManager.add({
      id: uuid,
      component: `<div>Blank ${uuid}</div>`,
    });
    pageManager.select(uuid);
    if (modal.isOpen()) {
      modal.close();
    }
  };
  elParent.appendChild(addNewPage);

  return elParent;
};
