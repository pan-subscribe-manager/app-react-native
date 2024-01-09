import { GluestackUIProvider, Text, Box, Button, ButtonText, VStack, Modal, Heading } from "@gluestack-ui/themed"
import { SafeAreaView } from "react-native"
import { config } from "@gluestack-ui/config"
import { useState } from "react";

export default function App() {
  const [modelText, setModelText] = useState("Hello, World!");

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView>
        <Box justifyContent="center" alignItems="center" padding="$8">
          <VStack space="lg">
            <Heading size="lg">
              
            </Heading>
            <Text>Open up App.js to start working on your app!</Text>
            <Button onPress={() => {
              setModelText("哈囉，世界！")
            }}>
              <ButtonText>{modelText}</ButtonText>
            </Button>
          </VStack>
        </Box>
      </SafeAreaView>
    </GluestackUIProvider>
  )
}
