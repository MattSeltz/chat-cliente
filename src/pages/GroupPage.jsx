import { useEffect, useState, useRef } from "react";

import { MessageComponent } from "../components/MessageComponent";
import { SendMessageComponent } from "../components/SendMessageComponent";
import { useSocket } from "../chat/chat";
import { ENVIRONMENT } from "../config/config";

export const GroupPage = () => {
  const socket = useSocket(ENVIRONMENT);

  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [listaDeMensajes]);

  const send = async () => {
    if (mensaje) {
      console.log("Enviando...");
      socket.emit("message", { mensaje, author: socket.id.slice(0, 5) });
      setMensaje("");
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Datos incompletos...");
    }
  };

  return (
    <div className="h-screen pb-10">
      <h3 className="text-center font-serif font-semibold mt-3">Grupo X</h3>
      <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-3 flex flex-col justify-between items-center gap-10 max-w-lg mx-auto ">
        <div
          className="flex flex-col items-center gap-10 overflow-auto "
          style={{ height: "500px", overflowY: "scroll" }}
        >
          {listaDeMensajes.map((item, index) => (
            <MessageComponent
              key={index}
              dir={item.id === socket.id}
              id={item.id}
              socket={socket.id}
            >
              {item.msg.mensaje}
            </MessageComponent>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <SendMessageComponent value={mensaje} evt={setMensaje} send={send} />
      </div>
    </div>
  );
};
