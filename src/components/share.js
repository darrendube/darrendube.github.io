import React from "react"
import {FacebookShareButton, PocketShareButton, TwitterShareButton, WhatsappShareButton} from "react-share"
import {FaFacebook, FaGetPocket, FaTwitter, FaWhatsapp} from "react-icons/fa"
import {Box, useColorModeValue} from "@chakra-ui/react"


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
            <Box p="9px" h="30px" w="30px" className="share-icon-container" color={useColorModeValue("#000000","rgba(255,255,255,0.66)")}>
                <FaTwitter />
            </Box>
        </TwitterShareButton>


        <WhatsappShareButton url={path.path}>
        <Box p="9px" h="30px" w="30px" className="share-icon-container" color={useColorModeValue("#000000","rgba(255,255,255,0.66)")}>
                <FaWhatsapp />
         </Box>
        </WhatsappShareButton>

        

        <FacebookShareButton url={path.path}>
        <Box p="9px" h="30px" w="30px" className="share-icon-container" color={useColorModeValue("#000000","rgba(255,255,255,0.66)")}>
                <FaFacebook />
            </Box>
        </FacebookShareButton>

        <PocketShareButton url={path.path}>
           
        <Box p="9px" h="30px" w="30px" className="share-icon-container" color={useColorModeValue("#000000","rgba(255,255,255,0.66)")}>
                
                <FaGetPocket />
            </Box>
        </PocketShareButton>
        
</div>
    )
}
