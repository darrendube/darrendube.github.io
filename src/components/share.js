import React from "react"
import { FacebookShareButton , FacebookIcon } from "react-share"
import { FaInstagram , FaTwitter , FaYoutube , FaFacebook} from "react-icons/fa"


const ShareButtons = () => {
    return (
        <FacebookShareButton url={"https://darrendube.com"} quote={"Darren Dube"} hashtag={"#darrendube"}><FaFacebook /></FacebookShareButton>
    )
}

export default ShareButtons