import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/38465439?s=460&u=4cbee2cce8e4020cd1ba8f2a61b2d1f9572d3514&v=4"
          alt="Daniel Alves"
        />
        <div>
          <strong>Daniel Alves</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Aula de programação voltada para redes neurais.
        <br />
        <br />
        Aprendendo redes neurais artificiais com facilidade e diversão.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$70,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
