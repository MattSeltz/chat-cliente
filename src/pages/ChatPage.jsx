import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import { MessageComponent } from "../components/MessageComponent";
import { SendMessageComponent } from "../components/SendMessageComponent";
import { useSocket } from "../chat/chat";
import { ENVIRONMENT } from "../config/config";
import { getOneData } from "../services/services";

export const ChatPage = () => {
  const userGlobal = useSelector((state) => state.users.value);

  const socket = useSocket(ENVIRONMENT, userGlobal);

  const messagesEndRef = useRef(null);

  const [mensaje, setMensaje] = useState("");
  const [listaDeMensajes, setListaDeMensajes] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => console.log("Conectado"));
      socket.on("message", (msg) => {
        setListaDeMensajes((prev) => [...prev, msg]);
      });

      return () => {
        socket.off("connect");
        socket.off("message");
      };
    }
  }, [socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [listaDeMensajes]);

  useEffect(() => {
    getOneData("/chats/", location.pathname.split("/")[2])
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  }, []);

  const send = async () => {
    if (mensaje) {
      console.log("Enviando...");
      socket.emit("message", mensaje);
      setMensaje("");
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Datos incompletos...");
    }
  };

  return (
    <div className="h-screen  pb-10">
      <h3 className="text-center font-serif font-semibold mt-3">Pepito</h3>
      <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-3 flex flex-col justify-between items-center gap-10 max-w-lg mx-auto">
        <div
          className="flex flex-col items-center gap-10 overflow-auto "
          style={{ height: "500px", overflowY: "scroll" }}
        >
          {listaDeMensajes.map((item, index) => (
            <MessageComponent
              id={item.id}
              socket={userGlobal}
              key={index}
              dir={item.id._id === userGlobal}
            >
              {item.msg}
            </MessageComponent>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <SendMessageComponent value={mensaje} evt={setMensaje} send={send} />
      </div>
    </div>
  );
};
