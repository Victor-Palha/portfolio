import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div className='conteiner'>
        <div className='information'>
            <h1>João Victor Ferreira Palha</h1>
            <h3>| Desenvolvedor FullStack |</h3>
            <div className='sobre'>
              <p>Sou um desenvolvedor fullstack apaixonado por tecnologia e aqui você irá encontrar um pouco mais sobre a mim, como meus projetos, tecnologias com que trabalho e artigos que escrevo sobre o que aprendo.</p>
            </div>
            <div className='contact'>
                <h3>Contato</h3>
                <p>Belém - Pará - Brasil</p>
                <p>(91) 98970-0567</p>
                <p>jv.palha@gmail.com</p>
            </div>
        </div>
        <div className='foto'>
            <img src='https://media.licdn.com/dms/image/C4E03AQEE-pTGVS6YLg/profile-displayphoto-shrink_800_800/0/1625778277950?e=1683763200&v=beta&t=KrRkmQerKFxeU7SMKVabF1PLT3-596mfdf5A8EAFzUE' alt='Foto de Victor Palha' />
        </div>
    </div>
  )
}

export default Home