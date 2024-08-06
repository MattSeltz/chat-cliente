import io from "socket.io-client";
import { useEffect, useState } from "react";

export const useSocket = (url, token) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io(url, {
      auth: {
        token,
      },
    });
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [url]);

  return socket;
};
