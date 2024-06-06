// node_modules/.pnpm/github.com+janhq+jan@0a150b373caa1cc12a6f17b14326bd1a01168bb9/node_modules/jan-app/core/src/types/api/index.ts
var NativeRoute = /* @__PURE__ */ ((NativeRoute2) => {
  NativeRoute2["openExternalUrl"] = "openExternalUrl";
  NativeRoute2["openAppDirectory"] = "openAppDirectory";
  NativeRoute2["openFileExplore"] = "openFileExplorer";
  NativeRoute2["selectDirectory"] = "selectDirectory";
  NativeRoute2["selectFiles"] = "selectFiles";
  NativeRoute2["relaunch"] = "relaunch";
  NativeRoute2["setNativeThemeLight"] = "setNativeThemeLight";
  NativeRoute2["setNativeThemeDark"] = "setNativeThemeDark";
  NativeRoute2["setMinimizeApp"] = "setMinimizeApp";
  NativeRoute2["setCloseApp"] = "setCloseApp";
  NativeRoute2["setMaximizeApp"] = "setMaximizeApp";
  NativeRoute2["showOpenMenu"] = "showOpenMenu";
  NativeRoute2["hideQuickAskWindow"] = "hideQuickAskWindow";
  NativeRoute2["sendQuickAskInput"] = "sendQuickAskInput";
  NativeRoute2["hideMainWindow"] = "hideMainWindow";
  NativeRoute2["showMainWindow"] = "showMainWindow";
  NativeRoute2["quickAskSizeUpdated"] = "quickAskSizeUpdated";
  NativeRoute2["ackDeepLink"] = "ackDeepLink";
  return NativeRoute2;
})(NativeRoute || {});
var AppRoute = /* @__PURE__ */ ((AppRoute2) => {
  AppRoute2["getAppConfigurations"] = "getAppConfigurations";
  AppRoute2["updateAppConfiguration"] = "updateAppConfiguration";
  AppRoute2["joinPath"] = "joinPath";
  AppRoute2["isSubdirectory"] = "isSubdirectory";
  AppRoute2["baseName"] = "baseName";
  AppRoute2["startServer"] = "startServer";
  AppRoute2["stopServer"] = "stopServer";
  AppRoute2["log"] = "log";
  AppRoute2["systemInformation"] = "systemInformation";
  AppRoute2["showToast"] = "showToast";
  return AppRoute2;
})(AppRoute || {});
var AppEvent = /* @__PURE__ */ ((AppEvent2) => {
  AppEvent2["onAppUpdateDownloadUpdate"] = "onAppUpdateDownloadUpdate";
  AppEvent2["onAppUpdateDownloadError"] = "onAppUpdateDownloadError";
  AppEvent2["onAppUpdateDownloadSuccess"] = "onAppUpdateDownloadSuccess";
  AppEvent2["onUserSubmitQuickAsk"] = "onUserSubmitQuickAsk";
  AppEvent2["onSelectedText"] = "onSelectedText";
  AppEvent2["onDeepLink"] = "onDeepLink";
  return AppEvent2;
})(AppEvent || {});
var DownloadRoute = /* @__PURE__ */ ((DownloadRoute2) => {
  DownloadRoute2["abortDownload"] = "abortDownload";
  DownloadRoute2["downloadFile"] = "downloadFile";
  DownloadRoute2["pauseDownload"] = "pauseDownload";
  DownloadRoute2["resumeDownload"] = "resumeDownload";
  DownloadRoute2["getDownloadProgress"] = "getDownloadProgress";
  DownloadRoute2["getFileSize"] = "getFileSize";
  return DownloadRoute2;
})(DownloadRoute || {});
var DownloadEvent = /* @__PURE__ */ ((DownloadEvent2) => {
  DownloadEvent2["onFileDownloadUpdate"] = "onFileDownloadUpdate";
  DownloadEvent2["onFileDownloadError"] = "onFileDownloadError";
  DownloadEvent2["onFileDownloadSuccess"] = "onFileDownloadSuccess";
  DownloadEvent2["onFileUnzipSuccess"] = "onFileUnzipSuccess";
  return DownloadEvent2;
})(DownloadEvent || {});
var LocalImportModelEvent = /* @__PURE__ */ ((LocalImportModelEvent2) => {
  LocalImportModelEvent2["onLocalImportModelUpdate"] = "onLocalImportModelUpdate";
  LocalImportModelEvent2["onLocalImportModelFailed"] = "onLocalImportModelFailed";
  LocalImportModelEvent2["onLocalImportModelSuccess"] = "onLocalImportModelSuccess";
  LocalImportModelEvent2["onLocalImportModelFinished"] = "onLocalImportModelFinished";
  return LocalImportModelEvent2;
})(LocalImportModelEvent || {});
var ExtensionRoute = /* @__PURE__ */ ((ExtensionRoute2) => {
  ExtensionRoute2["baseExtensions"] = "baseExtensions";
  ExtensionRoute2["getActiveExtensions"] = "getActiveExtensions";
  ExtensionRoute2["installExtension"] = "installExtension";
  ExtensionRoute2["invokeExtensionFunc"] = "invokeExtensionFunc";
  ExtensionRoute2["updateExtension"] = "updateExtension";
  ExtensionRoute2["uninstallExtension"] = "uninstallExtension";
  return ExtensionRoute2;
})(ExtensionRoute || {});
var FileSystemRoute = /* @__PURE__ */ ((FileSystemRoute2) => {
  FileSystemRoute2["appendFileSync"] = "appendFileSync";
  FileSystemRoute2["copyFileSync"] = "copyFileSync";
  FileSystemRoute2["unlinkSync"] = "unlinkSync";
  FileSystemRoute2["existsSync"] = "existsSync";
  FileSystemRoute2["readdirSync"] = "readdirSync";
  FileSystemRoute2["rm"] = "rm";
  FileSystemRoute2["mkdir"] = "mkdir";
  FileSystemRoute2["readFileSync"] = "readFileSync";
  FileSystemRoute2["writeFileSync"] = "writeFileSync";
  return FileSystemRoute2;
})(FileSystemRoute || {});
var FileManagerRoute = /* @__PURE__ */ ((FileManagerRoute2) => {
  FileManagerRoute2["syncFile"] = "syncFile";
  FileManagerRoute2["copyFile"] = "copyFile";
  FileManagerRoute2["getJanDataFolderPath"] = "getJanDataFolderPath";
  FileManagerRoute2["getResourcePath"] = "getResourcePath";
  FileManagerRoute2["getUserHomePath"] = "getUserHomePath";
  FileManagerRoute2["fileStat"] = "fileStat";
  FileManagerRoute2["writeBlob"] = "writeBlob";
  return FileManagerRoute2;
})(FileManagerRoute || {});
var CoreRoutes = [
  ...Object.values(AppRoute),
  ...Object.values(DownloadRoute),
  ...Object.values(ExtensionRoute),
  ...Object.values(FileSystemRoute),
  ...Object.values(FileManagerRoute)
];
var APIRoutes = [...CoreRoutes, ...Object.values(NativeRoute)];
var APIEvents = [
  ...Object.values(AppEvent),
  ...Object.values(DownloadEvent),
  ...Object.values(LocalImportModelEvent)
];

// node_modules/.pnpm/github.com+janhq+jan@0a150b373caa1cc12a6f17b14326bd1a01168bb9/node_modules/jan-app/core/src/browser/core.ts
var getJanDataFolderPath = () => globalThis.core.api?.getJanDataFolderPath();
var joinPath = (paths) => globalThis.core.api?.joinPath(paths);

// node_modules/.pnpm/github.com+janhq+jan@0a150b373caa1cc12a6f17b14326bd1a01168bb9/node_modules/jan-app/core/src/browser/fs.ts
var writeFileSync = (...args) => globalThis.core.api?.writeFileSync(...args);
var writeBlob = (path, data) => globalThis.core.api?.writeBlob(path, data);
var readFileSync = (...args) => globalThis.core.api?.readFileSync(...args);
var existsSync = (...args) => globalThis.core.api?.existsSync(...args);
var readdirSync = (...args) => globalThis.core.api?.readdirSync(...args);
var mkdir = (...args) => globalThis.core.api?.mkdir(...args);
var rm = (...args) => globalThis.core.api?.rm(...args, { recursive: true, force: true });
var unlinkSync = (...args) => globalThis.core.api?.unlinkSync(...args);
var appendFileSync = (...args) => globalThis.core.api?.appendFileSync(...args);
var syncFile = (src, dest) => globalThis.core.api?.syncFile(src, dest);
var copyFileSync = (...args) => globalThis.core.api?.copyFileSync(...args);
var copyFile = (src, dest) => globalThis.core.api?.copyFile(src, dest);
var fileStat = (path, outsideJanDataFolder) => globalThis.core.api?.fileStat(path, outsideJanDataFolder);
var fs = {
  writeFileSync,
  readFileSync,
  existsSync,
  readdirSync,
  mkdir,
  rm,
  unlinkSync,
  appendFileSync,
  copyFileSync,
  copyFile,
  syncFile,
  fileStat,
  writeBlob
};

// node_modules/.pnpm/github.com+janhq+jan@0a150b373caa1cc12a6f17b14326bd1a01168bb9/node_modules/jan-app/core/src/browser/extension.ts
var BaseExtension = class {
  settingFolderName = "settings";
  settingFileName = "settings.json";
  /** @type {string} Name of the extension. */
  name;
  /** @type {string} Product Name of the extension. */
  productName;
  /** @type {string} The URL of the extension to load. */
  url;
  /** @type {boolean} Whether the extension is activated or not. */
  active;
  /** @type {string} Extension's description. */
  description;
  /** @type {string} Extension's version. */
  version;
  constructor(url, name, productName, active, description, version) {
    this.name = name;
    this.productName = productName;
    this.url = url;
    this.active = active;
    this.description = description;
    this.version = version;
  }
  /**
   * Returns the type of the extension.
   * @returns {ExtensionType} The type of the extension
   * Undefined means its not extending any known extension by the application.
   */
  type() {
    return void 0;
  }
  /**
   * The compatibility of the extension.
   * This is used to check if the extension is compatible with the current environment.
   * @property {Array} platform
   */
  compatibility() {
    return void 0;
  }
  async registerSettings(settings2) {
    if (!this.name) {
      console.error("Extension name is not defined");
      return;
    }
    const extensionSettingFolderPath = await joinPath([
      await getJanDataFolderPath(),
      "settings",
      this.name
    ]);
    settings2.forEach((setting) => {
      setting.extensionName = this.name;
    });
    try {
      await fs.mkdir(extensionSettingFolderPath);
      const settingFilePath = await joinPath([extensionSettingFolderPath, this.settingFileName]);
      if (await fs.existsSync(settingFilePath)) return;
      await fs.writeFileSync(settingFilePath, JSON.stringify(settings2, null, 2));
    } catch (err) {
      console.error(err);
    }
  }
  async getSetting(key, defaultValue) {
    const keySetting = (await this.getSettings()).find((setting) => setting.key === key);
    const value = keySetting?.controllerProps.value;
    return value ?? defaultValue;
  }
  onSettingUpdate(key, value) {
    return;
  }
  /**
   * Determine if the prerequisites for the extension are installed.
   *
   * @returns {boolean} true if the prerequisites are installed, false otherwise.
   */
  async installationState() {
    return "NotRequired";
  }
  /**
   * Install the prerequisites for the extension.
   *
   * @returns {Promise<void>}
   */
  async install() {
    return;
  }
  async getSettings() {
    if (!this.name) return [];
    const settingPath = await joinPath([
      await getJanDataFolderPath(),
      this.settingFolderName,
      this.name,
      this.settingFileName
    ]);
    try {
      const content = await fs.readFileSync(settingPath, "utf-8");
      const settings2 = JSON.parse(content);
      return settings2;
    } catch (err) {
      console.warn(err);
      return [];
    }
  }
  async updateSettings(componentProps) {
    if (!this.name) return;
    const settings2 = await this.getSettings();
    const updatedSettings = settings2.map((setting) => {
      const updatedSetting = componentProps.find(
        (componentProp) => componentProp.key === setting.key
      );
      if (updatedSetting && updatedSetting.controllerProps) {
        setting.controllerProps.value = updatedSetting.controllerProps.value;
      }
      return setting;
    });
    const settingPath = await joinPath([
      await getJanDataFolderPath(),
      this.settingFolderName,
      this.name,
      this.settingFileName
    ]);
    await fs.writeFileSync(settingPath, JSON.stringify(updatedSettings, null, 2));
    updatedSettings.forEach((setting) => {
      this.onSettingUpdate(
        setting.key,
        setting.controllerProps.value
      );
    });
  }
};

// src/settings.ts
var settings = [
  {
    key: "input",
    title: "Totally Real API Key",
    description: "This is a fake API key setting that is used to demonstrate how to use the settings.json file.",
    controllerType: "input",
    controllerProps: {
      placeholder: "API_KEY_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      value: "",
      type: "password"
    }
  },
  {
    key: "checkbox",
    title: "Totally Useful Checkbox",
    description: "This is a fake checkbox setting that is used to demonstrate how to use the settings.json file.",
    controllerType: "checkbox",
    controllerProps: {
      value: false
    }
  },
  {
    key: "slider",
    title: "Totally Awesome Slider",
    description: "This is a fake slider setting that is used to demonstrate how to use the settings.json file.",
    controllerType: "slider",
    controllerProps: {
      min: 0,
      max: 100,
      step: 1,
      value: 50
    }
  }
];
var settings_default = settings;

// src/main.ts
var MyExtension = class extends BaseExtension {
  async onLoad() {
    this.registerSettings(settings_default);
    console.log("haiii :3");
  }
  async onUnload() {
    console.log("byebye :3");
  }
};
export {
  MyExtension as default
};
