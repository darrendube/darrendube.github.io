import React from "react"

const TLDR = (props) => {
    return (<div className="tldr">
        <h2>Key Takeaways:</h2>
        {props.children}
    </div>)
}

export default TLDR