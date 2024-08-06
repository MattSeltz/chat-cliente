import io from "socket.io-client";
import { useEffect, useState } from "react";

export const useSocket = (url, user, chat) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io(url, {
      auth: {
        user,
        chat,
      },
    });
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [url]);

  return socket;
};
