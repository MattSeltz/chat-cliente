import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";
import { getOneData } from "../services/services";
import { ModalComponent } from "../components/ModalComponent";

export const HomePage = () => {
  const userGlobal = useSelector((state) => state.users.value);

  const [user, setUser] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getOneData("/usuarios/", userGlobal)
      .then((res) => {
        setUser(res);
        setUsersList((prev) => prev.concat(res.chats));
      })
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <div className="h-screen overflow-hidden pb-10">
      <h3 className="text-center font-serif font-semibold mt-3">
        {user?.nombre}
      </h3>
      <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-3 flex flex-col items-center gap-10 max-w-lg mx-auto">
        <ButtonComponent evt={() => setIsModalOpen(true)}>
          Nuevo Chat
        </ButtonComponent>

        <ModalComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <div className="flex flex-col items-center gap-10 overflow-auto ">
          {usersList.map((item, index) => (
            <Link to={`/chat/${item._id}`}>
              <CardComponent key={item._id} dir={index % 2 === 0 && true}>
                {
                  item.usuarios.filter((item) => item._id !== userGlobal)[0]
                    .nombre
                }
              </CardComponent>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
