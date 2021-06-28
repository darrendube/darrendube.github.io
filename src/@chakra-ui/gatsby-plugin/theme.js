import { extendTheme, useColorModeValue } from "@chakra-ui/react"


const theme = extendTheme({
  fonts: {
    heading: "Jost",
    body: "Jost",
  },
  initialColorMode: "light",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      "html, body": {
        background: props.colorMode === "light" ? "#ffffff" : "#0e182a",
     
      },
    }),
  },
})

export default theme