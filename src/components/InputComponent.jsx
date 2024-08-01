import { Input } from "antd";

export const InputComponent = ({ children, type }) => {
  return <Input size="large" type={type} placeholder={children} />;
};
