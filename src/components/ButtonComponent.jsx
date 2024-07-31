import { Button } from "antd";

export const ButtonComponent = ({ children }) => {
  return (
    <Button size={"large"} className="w-[300px] font-semibold ">
      {children}
    </Button>
  );
};
