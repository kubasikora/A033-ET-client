import { app, BrowserWindow, ipcMain } from "electron";
import { FileService } from "./services/FileService";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let mainWindow: BrowserWindow | null;
let fileService: FileService | null;

if (require("electron-squirrel-startup")) {
  app.quit();
}

function createWindow(): void {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
  mainWindow.removeMenu();
}

async function registerServices(): Promise<void> {
  fileService = new FileService(mainWindow);
}

async function registerListeners(): Promise<void> {
  ipcMain.handle("open-analysis-file", async (_event) => {
    if (!mainWindow) return;

    const content = await fileService.openFileFromFileDialog();
    return content;
  });
}

app
  .on("ready", createWindow)
  .whenReady()
  .then(registerServices)
  .then(registerListeners)
  .catch((e) => console.error(e));

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
