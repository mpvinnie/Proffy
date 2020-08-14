import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/61069632?s=460&u=391398af44b8d1dad0f5429ef13cdad22066ea9f&v=4" alt="Vinicius Peres"/>
        <div>
          <strong>Vinicius Peres</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Desenvolvedor Web e Músico.
        <br />
        Apaixonado por programação e música.
        <br/>
        Amante das melhores tecnologias de programação.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem