import { dialog, BrowserWindow } from "electron";
import { readFile } from "fs/promises";

export class FileService {
  constructor(private window: BrowserWindow) {}

  async openFileFromFileDialog(): Promise<string | undefined> {
    const files = await dialog.showOpenDialog(this.window, {
      properties: ["openFile"],
    });

    if (files.canceled) {
      return;
    }

    const filepath = files.filePaths[0];
    const content = await readFile(filepath);
    return content.toString();
  }
}
