import React from 'react'
import './habilidades.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
//Icons
import {SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiPrisma, SiExpress, SiMysql, SiMicrosoftsqlserver, SiMongodb, SiAmazonaws, SiHeroku, SiPython, SiGit} from "react-icons/si"
import {FcLinux} from "react-icons/fc"


const Habilidades = () => {
    Aos.init({duration: 800})
  return (
    <div className='habilidades'>
        <h2>Habilidades</h2>
        <div className="grid">
            <div className="tecs" data-aos="flip-up">
                <h3>Frontend</h3>
                <div className="icons">
                    <SiJavascript size={50} color="#F7DF1E"/>
                    <SiReact size={50} color="#61DAFB"/>
                    <SiHtml5 size={50} color="#E34F26"/>
                    <SiCss3 size={50} color="#1572B6"/>
                </div>
            </div>
            <div className="tecs" data-aos="flip-down">
                <h3>Backend</h3>
                <div className="icons">
                    <SiNodedotjs size={50} color="#339933"/>
                    <SiExpress size={50} color="#000000"/>
                    <SiTypescript size={50} color="#3178C6"/>
                    <SiPrisma size={50} color="#0C344B"/>
                </div>
            </div>
            <div className="tecs" data-aos="zoom-in-down">
                <h3>Banco de Dados</h3>
                <div className="icons">
                    <SiMysql size={50} color="#4479A1"/>
                    <SiMicrosoftsqlserver size={50} color="#CC2927"/>
                    <SiMongodb size={50} color="#47A248"/>
                </div>
            </div>
            <div className="tecs" data-aos="zoom-in-up">
                <h3>Hosts</h3>
                <div className="icons">
                    <SiAmazonaws size={50} color="#fc9d03"/>
                    <SiHeroku size={50} color="#430098"/>
                </div>
            </div>
            <div className="tecs" data-aos="flip-up">
                <h3>Outras Tecnologias</h3>
                <div className="icons">
                    <SiGit size={50} color="#F05032"/>
                    <SiPython size={50} color="#3776AB"/>
                    <FcLinux size={50} color="#000000"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Habilidades