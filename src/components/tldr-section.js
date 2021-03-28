import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TLDR = (props) => {
    return (<div className="tldr">
        <h2>Key Takeaways:</h2>
        {props.children}
    </div>)
}

export default TLDR