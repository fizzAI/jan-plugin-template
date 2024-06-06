import { SettingComponentProps } from "@janhq/core/types";

const settings: SettingComponentProps[] = [
  {
    key: "input",
    title: "Totally Real API Key",
    description:
      "This is a fake API key setting that is used to demonstrate how to use the settings.json file.",
    controllerType: "input",
    controllerProps: {
      placeholder: "API_KEY_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      value: "",
      type: "password",
    },
  },
  {
    key: "checkbox",
    title: "Totally Useful Checkbox",
    description:
      "This is a fake checkbox setting that is used to demonstrate how to use the settings.json file.",
    controllerType: "checkbox",
    controllerProps: {
      value: false,
    },
  },
  {
    // This doesn't seem to actually *work* yet? But it's in the types, soo...
    key: "slider",
    title: "Totally Awesome Slider",
    description:
      "This is a fake slider setting that is used to demonstrate how to use the settings.json file.",
    controllerType: "slider",
    controllerProps: {
      min: 0,
      max: 100,
      step: 1,
      value: 50,
    },
  },
];
export default settings;
