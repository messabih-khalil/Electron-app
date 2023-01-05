const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const windowState = require("electron-window-state");

require("./ipcMain/newItemIpc");

function createWindow() {
  let state = windowState({
    defaultWidth: 500,
    defaultHeight: 650,
  });
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    minWidth: 350,
    maxWidth: 500,
    minHeight: 650,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("./renderer/main.html");

  state.manage(mainWindow);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
