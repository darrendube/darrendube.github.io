import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SubscribeForm from "./subscribe-form"

const SubscribeSectionDownloadable = (props) => {
    return (<div className="ssdownloadable">
        <div>
        {props.children}
        <SubscribeForm downloadable={true}/>
        </div>

        <div className="center">
            <img src={props.thumbnail}></img>
        </div>

        
    </div>)
}

export default SubscribeSectionDownloadable