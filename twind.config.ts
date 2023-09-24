import { Preset, defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset],
  }),
  selfURL: import.meta.url,
};
