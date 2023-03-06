import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {SiGmail} from "react-icons/si"

import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <p>Desenvolvido por Victor Palha</p>
        <a href="https://github.com/Victor-Palha" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-ferreira-palha-b67736216/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        <a href="mailto:jv.palha@gmail.com"><SiGmail/></a>
    </footer>
  )
}

export default Footer