export default (editor) => {

  // editor.Panels.addPanel({
  //   id: "basic-actions",
  //   visible: true,
  //   buttons: [
  //     {
  //       id: "alert-button",
  //       className: "fa fa-check",
  //       command(editor) {
  //         alert("Hello World");
  //       },
  //     },
  //   ],
  // });
  editor.Panels.addPanel({
    id: "devices",
    buttons: [
      {
        id: "set-device-desktop",
        command: function (e) {
          return e.setDevice("Desktop");
        },
        className: "fa fa-desktop",
        active: 1,
      },
      {
        id: "set-device-tablet",
        command: function (e) {
          return e.setDevice("Tablet");
        },
        className: "fa fa-tablet",
      },
      {
        id: "set-device-mobile",
        command: function (e) {
          return e.setDevice("Mobile portrait");
        },
        className: "fa fa-mobile",
      },
    ],
  });

};
