import React from 'react'
import Contato from '../../components/Contato'
import Habilidades from '../../components/Habilidades'
import './home.css'
const Home = () => {
  return (
    <div>
      <div className='conteiner'>
          <div className='information'>
              <h1>Hello World! <br /> Eu sou o <span>João Victor Ferreira Palha</span></h1>
              <h3>| Desenvolvedor FullStack |</h3>
              
          </div>
          <div className='foto'>
              <img src='https://media.licdn.com/dms/image/C4E03AQEE-pTGVS6YLg/profile-displayphoto-shrink_800_800/0/1625778277950?e=1683763200&v=beta&t=KrRkmQerKFxeU7SMKVabF1PLT3-596mfdf5A8EAFzUE' alt='Foto de Victor Palha' />
          </div>
      </div>
      <div className='about'>
        <h2>Sobre mim</h2>
        <div className='sobre'>
          <p>Meu nome é João Victor Ferreira Palha e tenho 20 anos, sou um desenvolvedor fullstack apaixonado por tecnologia, minha principal área de atuação é como desenvolvedor Backend em Node.js utilizando Typescript para criação de API's REST porém comecei minha jornada como programador no Frontend e desde então venho acumulando experiência em várias áreas da tecnologia desde Frontend, Backend, redes, infraestrutura e sistemas operacionais. Atualmente focado em desenvolver API's e hospedar em clound como AWS (Amazon Web Service) e venho me esforçando para aprender cada vez mais!</p>
        </div>
      </div>
      <Habilidades/>
      <Contato/>
    </div>
  )
}

export default Home