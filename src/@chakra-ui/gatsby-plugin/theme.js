import { extendTheme, useColorModeValue } from "@chakra-ui/react"


const theme = extendTheme({
  fonts: {
    heading: "Jost",
    body: "Jost",
  },
  initialColorMode: "system",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      "html, body": {
        background: props.colorMode === "light" ? "#ffffff" : "#0e182a",
     
      },
      "a:hover": {
        color: "blue.500",
        textDecoration: "underline"
      },
      "a.normal": {
        textDecoration: "underline",
        textDecorationColor: "blue.500"
      }

    }),
  },
})

export default theme