import { Text, XStack, YStack } from "tamagui";

export default () => (
  <XStack
    flex={1}
    flexWrap="wrap"
    backgroundColor="#fff"
    hoverStyle={{
      backgroundColor: "red",
    }}
    // media query
    $gtSm={{
      flexDirection: "column",
      flexWrap: "nowrap",
    }}
  >
    <YStack gap="$3">
      <Text>Hello</Text>
      <Text>World</Text>
    </YStack>
  </XStack>
);
