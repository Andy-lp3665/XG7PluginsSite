"use client";
import { useState } from "react";
import "./css/body.scss";

import Logo from "../imgs/logo.png";

export default function Site() {
  return (
    <>
      <div className="container">
        <form action="/login" method="post">
          <img src={Logo.src} alt="Logo" />
          <label htmlFor="login">
            <h1>Entre</h1>{" "}
          </label>
          <input type="text" name="login" placeholder="Email" required />

          <input type="text" placeholder="senha" required />

          <input type="submit" id="entrada" value={"Entrar"} />
        </form>
        <a href="cadastrar">
          <button id="cancelar1">Não tem uma conta?</button>
        </a>
      </div>
    </>
  );
}
