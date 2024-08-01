import { useState } from "react";

import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";
import { InputComponent } from "../components/InputComponent";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (email && password) {
      console.log("Iniciando Sesión...");
    } else {
      alert("Datos incompletos...");
    }
  };

  return (
    <div className="h-screen overflow-hidden pb-10">
      <h3 className="text-center font-serif font-semibold mt-3 text-xl">
        Login
      </h3>
      <div className="h-1/3 flex flex-col items-center gap-10 mt-10 max-w-lg mx-auto px-10">
        <InputComponent type={"email"} value={email} evt={setEmail}>
          Email
        </InputComponent>
        <InputComponent type={"password"} value={password} evt={setPassword}>
          Contraseña
        </InputComponent>
        <ButtonComponent bg={true} evt={login}>
          INGRESAR
        </ButtonComponent>
      </div>
      <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-10 flex flex-col items-center gap-10 max-w-lg mx-auto">
        <div className="flex flex-col items-center gap-10 overflow-hidden ">
          <CardComponent dir={false}></CardComponent>
          <CardComponent dir={true}></CardComponent>
          <CardComponent dir={false}></CardComponent>
        </div>
      </div>
    </div>
  );
};
