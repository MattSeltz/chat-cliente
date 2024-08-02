import { useEffect, useState } from "react";

import { MessageComponent } from "../components/MessageComponent";
import { SendMessageComponent } from "../components/SendMessageComponent";
import { useSocket } from "../chat/chat";
import { ENVIRONMENT } from "../config/config";

export const GroupPage = () => {
  const socket = useSocket(ENVIRONMENT);

  const [mensaje, setMensaje] = useState("");
  const [listaDeMensajes, setListaDeMensajes] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => console.log("Conectado"));
      socket.on("message", (msg) =>
        setListaDeMensajes((prev) => [...prev, msg])
      );

      return () => {
        socket.off("connect");
        socket.off("message");
      };
    }
  }, [socket]);

  const send = async () => {
    if (mensaje) {
      console.log("Enviando...");
      socket.emit("message", { mensaje, author: socket.id.slice(0, 5) });
      setMensaje("");
    } else {
      alert("Datos incompletos...");
    }
  };

  return (
    <div className="h-screen overflow-hidden pb-10">
      <h3 className="text-center font-serif font-semibold mt-3">Grupo X</h3>
      <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-3 flex flex-col justify-between items-center gap-10 max-w-lg mx-auto">
        <div className="flex flex-col items-center gap-10 overflow-auto ">
          {listaDeMensajes.map((item, index) => (
            <MessageComponent
              key={index}
              dir={index % 2 === 0 ? false : true}
              group={true}
              author={item.author}
            >
              {item.mensaje}
            </MessageComponent>
          ))}
        </div>
        <SendMessageComponent value={mensaje} evt={setMensaje} send={send} />
      </div>
    </div>
  );
};
