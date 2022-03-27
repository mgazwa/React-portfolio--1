import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";

const HeaderSocials = () => {
    return(
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/marcin-g%C4%85zwa-628848235/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><BsGithub/></a>
            <a href="https://www.facebook.com/marcin.gazwa" target="_blank"><BsFacebook/></a>
        </div>
    )
}

export default HeaderSocials