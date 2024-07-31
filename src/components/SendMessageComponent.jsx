import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

export const SendMessageComponent = () => {
  return (
    <div className="flex gap-3 w-[300px]">
      <Input size="large" placeholder="Nuevo Mensaje" />
      <SendOutlined className="text-3xl" />
    </div>
  );
};
