import React from 'react'
import {BsLinkedin ,BsGithub ,BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com"><BsLinkedin/></a>
        <a href="http://github.com"><BsGithub/></a>
        <a href="http://instagram.com"><BsInstagram/></a>
      
    </div>
  )
}

export default HeaderSocials
