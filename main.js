const { app, BrowserWindow } = require("electron/main");

const createWindow = () => {
  new BrowserWindow().loadFile("./app/html/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
