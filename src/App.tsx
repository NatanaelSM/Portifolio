import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./theme"
import { Home } from "./pages/home"

function App() {

  return (
    <ChakraProvider theme={theme}>
        <Home/>
    </ChakraProvider> 
  )
}

export default App
