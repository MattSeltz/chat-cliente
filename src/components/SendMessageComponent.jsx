import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

export const SendMessageComponent = ({ value, evt, send }) => {
  return (
    <div className="flex gap-3 w-[300px]">
      <Input
        size="large"
        placeholder="Nuevo Mensaje"
        value={value}
        onChange={(e) => evt(e.target.value)}
      />
      <SendOutlined className="text-3xl" onClick={send} />
    </div>
  );
};
