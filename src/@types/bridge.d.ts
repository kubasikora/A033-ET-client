import { bridge } from "../../electron/bridge";

declare global {
  interface Window {
    bridge: typeof bridge;
  }
}
