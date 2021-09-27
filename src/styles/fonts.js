import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;706;800;900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
      `}
  />
)
export default Fonts