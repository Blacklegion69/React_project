import { createTamagui, TamaguiProvider, View } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this

const config = createTamagui(defaultConfig);

const tamaguiProvider = () => (
  <TamaguiProvider config={config}>
    <View />
  </TamaguiProvider>
);

export default tamaguiProvider;
