import { UIProvider, Text, Center } from "@yamada-ui/react";
import ThreadList from "./threadList";

function App() {

  return (
    <>
    <UIProvider>
      <Text>
        <ThreadList />
      </Text>
    </UIProvider>
    </>
  )
}

export default App
