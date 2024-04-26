"use client";
import "./css/body.scss";

import Logo from "../imgs/logo.png";

export default function Site() {
  return (
    <>
      <form action="Cadastrar" method="post">
        <img src={Logo.src} alt="Logo" />
        <label>
          {" "}
          <h2>Faça o seu cadastro</h2>
        </label>
        <input
          type="text"
          name="nome"
          placeholder="nome de usuário*"
          id=""
          required
        />

        <input type="text" name="login" placeholder="email*" id="" required />

        <input type="text" placeholder="senha*" />

        <input type="password" placeholder="confirmar senha*" id="" required />

        <input type="submit" id="enviar" />
      </form>
    </>
  );
}
