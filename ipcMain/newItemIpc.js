const { ipcMain } = require("electron");

// listen to new item request

ipcMain.on("new-item", (e, data) => {
  setTimeout(() => {
    e.sender.send("new-item-response", {
      item: data,
    });
  }, 200);
});
