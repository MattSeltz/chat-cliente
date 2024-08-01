import { Button } from "antd";

export const ButtonComponent = ({ children, bg, evt }) => {
  return (
    <Button
      size={"large"}
      className={`w-[300px] font-semibold ${
        bg && "bg-blue-500 text-neutral-50"
      }`}
      onClick={evt}
    >
      {children}
    </Button>
  );
};
