import React from "react"
import { FacebookShareButton , FacebookIcon , EmailShareButton , TwitterShareButton , WhatsappShareButton , PocketShareButton} from "react-share"
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaWhatsapp , FaEnvelope, FaLinkedinIn , FaLinkedin, FaEnvelopeSquare, FaRegEnvelope , FaGetPocket} from "react-icons/fa"

function objToString(obj, ndeep) {
    if(obj == null){ return String(obj); }
    switch(typeof obj){
      case "string": return '"'+obj+'"';
      case "function": return obj.name || obj.toString();
      case "object":
        var indent = Array(ndeep||1).join('\t'), isArray = Array.isArray(obj);
        return '{['[+isArray] + Object.keys(obj).map(function(key){
             return '\n\t' + indent + key + ': ' + objToString(obj[key], (ndeep||1)+1);
           }).join(',') + '\n' + indent + '}]'[+isArray];
      default: return obj.toString();
    }
  }



export default function ShareButtons(path , title) {
    return (
<div>

        <TwitterShareButton url={path.path}>
            <div className="share-icon-container">
                <FaTwitter />
            </div>
        </TwitterShareButton>


        <WhatsappShareButton url={path.path}>
            <div className="share-icon-container">
                <FaWhatsapp />
         </div>
        </WhatsappShareButton>

        

        <FacebookShareButton url={path.path}>
            <div className="share-icon-container">
                <FaFacebook />
            </div>
        </FacebookShareButton>

        <PocketShareButton url={path.path}>
           
            <div className="share-icon-container">
                
                <FaGetPocket />
            </div>
        </PocketShareButton>
        
</div>
    )
}
