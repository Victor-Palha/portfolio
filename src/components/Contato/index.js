import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './contato.css'
//Icons
import {BsLinkedin, BsGithub, BsWhatsapp} from "react-icons/bs"
import {SiGmail} from "react-icons/si"

const Contato = () => {
  Aos.init({duration: 800})
  return (
    <div className='contato' data-aos="flip-left">
        <h2>Contatos</h2>
        <div className="fonts">
          <div className="each">
            <a href="https://github.com/Victor-Palha" rel='author'><BsGithub size={50} color="#000000"/></a>
            <span>@Victor-Palha</span>
          </div>
          <div className="each">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-ferreira-palha-b67736216/" rel='author'><BsLinkedin size={50} color="#0e76a8"/></a>
            <span>@João Victor Ferreira Palha</span>
          </div>
          <div className="each">
            <a href="https://wa.me/55091989700567" target="_blank" rel='noreferrer'><BsWhatsapp size={50} color="#25D366"/></a>
            <span>(91) 98970-0567</span>
          </div>
          <div className="each">
            <a href="mailto:jv.palha@gmail.com" rel='author'><SiGmail size={50} color="#D44638"/></a>
            <span>jv.palha@gmail.com</span>   
          </div>
        </div>
    </div>
  )
}

export default Contato