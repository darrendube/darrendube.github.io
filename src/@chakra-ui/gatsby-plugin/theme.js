import { extendTheme, useColorModeValue } from "@chakra-ui/react"


const theme = extendTheme({
breakpoints: {
  sm: '320px',
      md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
},
  fonts: {
    heading: "Open Sans",
    body: "Montserrat",
  },
  initialColorMode: "system",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      "html, body": {
        background: props.colorMode === "light" ? "#ffffff" : "#000000",
     
      },
      "a:hover": {
        color: "blue.500",
        textDecoration: "underline"
      },
      "a.normal": {
        textDecoration: "underline",
        textDecorationColor: "blue.500"
      },


    }),
  },
})

export default theme