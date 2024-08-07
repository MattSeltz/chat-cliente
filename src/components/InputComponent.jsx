import { Input } from "antd";

export const InputComponent = ({ children, type, value, evt }) => {
  return (
    <Input
      size="large"
      value={value}
      onChange={(e) => evt(e.target.value)}
      type={type}
      placeholder={children}
    />
  );
};
