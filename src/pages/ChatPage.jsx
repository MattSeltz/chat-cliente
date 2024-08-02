import { useEffect, useState } from "react";

import { MessageComponent } from "../components/MessageComponent";
import { SendMessageComponent } from "../components/SendMessageComponent";
import { socket } from "../chat/chat";

export const ChatPage = () => {
  const [mensaje, setMensaje] = useState("");
  const [listaDeMensajes, setListaDeMensajes] = useState([]);

  useEffect(() => {
    socket.on("connect", () => console.log("Conectado"));
    socket.on("message", (msg) => setListaDeMensajes((prev) => [...prev, msg]));

    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, []);

  const send = async () => {
    if (mensaje) {
      console.log("Enviando...");
      socket.emit("message", { mensaje });
      setMensaje("");
    } else {
      alert("Datos incompletos...");
    }
  };

  return (
    <div className="h-screen overflow-hidden pb-10">
      <h3 className="text-center font-serif font-semibold mt-3">Pepito</h3>
      <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-3 flex flex-col justify-between items-center gap-10 max-w-lg mx-auto">
        <div className="flex flex-col items-center gap-10 overflow-auto ">
          {listaDeMensajes.map((item, index) => (
            <MessageComponent key={index} dir={index % 2 === 0 ? false : true}>
              {item.mensaje}
            </MessageComponent>
          ))}
        </div>
        <SendMessageComponent value={mensaje} evt={setMensaje} send={send} />
      </div>
    </div>
  );
};
