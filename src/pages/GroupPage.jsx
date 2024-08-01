import { useState } from "react";

import { MessageComponent } from "../components/MessageComponent";
import { SendMessageComponent } from "../components/SendMessageComponent";

export const GroupPage = () => {
  const [mensaje, setMensaje] = useState("");

  const send = async () => {
    if (mensaje) {
      console.log("Enviando...");
    } else {
      alert("Datos incompletos...");
    }
  };

  return (
    <div className="h-screen overflow-hidden pb-10">
      <h3 className="text-center font-serif font-semibold mt-3">Grupo X</h3>
      <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-3 flex flex-col items-center gap-10 max-w-lg mx-auto">
        <div className="flex flex-col items-center gap-10 overflow-auto ">
          <MessageComponent dir={false} group={true}>
            Pepito
          </MessageComponent>
          <MessageComponent dir={true} group={true}>
            Pepito
          </MessageComponent>
          <MessageComponent dir={false} group={true}>
            Pepito
          </MessageComponent>
          <MessageComponent dir={true} group={true}>
            Pepito
          </MessageComponent>
          <MessageComponent dir={false} group={true}>
            Pepito
          </MessageComponent>
          <MessageComponent dir={true} group={true}>
            Pepito
          </MessageComponent>
        </div>
        <SendMessageComponent value={mensaje} evt={setMensaje} send={send} />
      </div>
    </div>
  );
};
