import React from "react"

const SubscribeFormFooter = () => {
  return (

   <form
  action="https://buttondown.email/api/emails/embed-subscribe/darrendube"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/darrendube', 'popupwindow')"
  class="embeddable-buttondown-form subscribe-form-footer"
>
        
          <input type="email" className="text-box-footer" name="email" placeholder="Email" required></input>
          <input type="hidden" value="1" name="embed"></input>
          <input type="submit" className="hero-button-footer" value=" SUBSCRIBE &rarr;"></input>
        
        </form>
     
    
  )
}

export default SubscribeFormFooter