const { app, BrowserWindow } = require("electron/main");
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("./app/html/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
