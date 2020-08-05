import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/67837824?s=460&u=03541216790a80ec70e3fd2e06ed96e21de3fe8a&v=4" alt="Imagem do Professor" />
        <div>
          <strong>Isaque José de Souza</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias avançadas de química avançada.
        <br /><br />
        Apaixonado por exploir coisas em laboratórios e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram
        por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
            <strong>R$ 100,00 </strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
            Entrar em contato
          </button>
      </footer>

    </article>
  );
}

export default TeacherItem;