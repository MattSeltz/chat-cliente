import { Modal, Divider, List } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getData, postData, putData } from "../services/services";
import { InputComponent } from "./InputComponent";

export const ModalComponent = ({ isModalOpen, setIsModalOpen, isChat }) => {
  const userGlobal = useSelector((state) => state.users.value);

  const navigate = useNavigate();

  const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    getData("/usuarios")
      .then((res) => {
        const filtered = res.filter((item) => item._id !== userGlobal);
        setListaDeUsuarios((prev) => prev.concat(filtered));
      })
      .catch((e) => console.error(e));
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
    setNombre("");
    setUsuarioSeleccionado(null);
  };

  const handleOk = async () => {
    if (usuarioSeleccionado) {
      const res = await postData("/chats", {
        usuarios: [usuarioSeleccionado, userGlobal],
      });

      await putData("/usuarios/", usuarioSeleccionado, { chats: res });
      await putData("/usuarios/", userGlobal, { chats: res });

      handleCancel();
      navigate(`/chat/${res._id}`);
    } else {
      alert("Datos incompletos...");
    }
  };

  return (
    <Modal
      title={`Nuevo ${isChat ? "Chat" : "Grupo"}`}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Crear"
      cancelText="Cancelar"
    >
      {!isChat && (
        <>
          <InputComponent type={"text"} value={nombre} evt={setNombre}>
            Nombre del grupo
          </InputComponent>
          <Divider />
        </>
      )}

      <List
        header={<div>Seleciona un usuario</div>}
        bordered
        dataSource={listaDeUsuarios}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                item._id === usuarioSeleccionado && <CheckCircleOutlined />
              }
              title={
                <a href="#" onClick={() => setUsuarioSeleccionado(item._id)}>
                  {item.nombre}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </Modal>
  );
};
