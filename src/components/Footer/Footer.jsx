import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footerContainer">
      <div class="socialnetworks">
            <div class="social">
                <Link to="https://es-es.facebook.com/" target="_blank">
                    <img className="logo" src="https://thumbs.dreamstime.com/z/fije-de-vector-social-popular-del-elemento-instagram-facebook-twitter-los-iconos-logotipos-medios-en-el-fondo-blanco-ejemplos-ai-151374830.jpg" alt="Logo Facebook"></img>
                </Link>
            </div>
            <span class="copyright">@<strong>JoseLlanas</strong></span>
        </div>
    </div>
  )
}

export default Footer