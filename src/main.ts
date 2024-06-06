import { BaseExtension } from "@janhq/core/browser/extension";
import settings from "./settings";

enum Settings {
  API_KEY = "input",
  CHECKBOX = "checkbox",
}

export default class MyExtension extends BaseExtension {
  override async onLoad(): Promise<void> {
    this.registerSettings(settings);

    console.log("haiii :3");
  }

  override async onUnload(): Promise<void> {
    console.log("byebye :3");
  }

  onSettingUpdate<T>(key: string, value: T): void {
    if (!value) return;

    switch (key) {
      case Settings.API_KEY:
        console.log("API key updated:", value);
        break;
      case Settings.CHECKBOX:
        console.log("Checkbox updated:", value);
        break;
      default:
        console.log("How the f*ck did you get here?");
        break;
    }
  }
}
