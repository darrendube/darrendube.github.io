import React from "react"
import { FacebookShareButton , FacebookIcon , EmailShareButton , TwitterShareButton , LinkedinShareButton} from "react-share"
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaWhatsapp , FaEnvelope, FaLinkedinIn , FaLinkedin, FaEnvelopeSquare, FaRegEnvelope} from "react-icons/fa"


export default function ShareButtons(post) {
    return (
<div>

        <TwitterShareButton url={"https://darrendube.com/"+post.path}>
            <div className="share-icon-container">
                <FaTwitter />
            </div>
        </TwitterShareButton>


        <FacebookShareButton url={"https://darrendube.com/"+post.path} quote={"Darren Dube"} hashtag={"#darrendube"} >
            <div className="share-icon-container">
                <FaFacebook />
         </div>
        </FacebookShareButton>

        

        <LinkedinShareButton url={"https://darrendube.com/"+post.path}>
            <div className="share-icon-container">
                <FaLinkedinIn />
            </div>
        </LinkedinShareButton>

        <EmailShareButton url={"https://darrendube.com/"+post.path}>
            <div className="share-icon-container">
                <FaRegEnvelope />
            </div>
        </EmailShareButton>
</div>
    )
}
