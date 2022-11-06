import { contextBridge, ipcRenderer } from "electron";

export const bridge = {
  loadFile: async () => {
    return ipcRenderer.invoke("open-analysis-file");
  }
};

contextBridge.exposeInMainWorld("bridge", bridge);
