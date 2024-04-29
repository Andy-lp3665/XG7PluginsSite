"use client";
import "./css/body.scss";

import Logo from "../imgs/logo.png";

export default function Site() {
  return (
    <>
      <div className="container">
        <form action="Cadastrar" method="post">
          <img src={Logo.src} alt="Logo" />
          <label>
            {" "}
            <h2>Faça o seu cadastro</h2>
          </label>
          <input
            type="text"
            name="nome"
            placeholder="Nome de usuário"
            id=""
            required
          />

          <input type="text" name="login" placeholder="Email" id="" required />

          <input type="text" placeholder="Senha" />

          <input type="password" placeholder="Confirmar senha" id="" required />

          <input type="submit" id="enviar" value={"Entrar"} />
        </form>
        <a href="./">
          <button id="b1"> Cancelar</button>
        </a>
      </div>
    </>
  );
}
