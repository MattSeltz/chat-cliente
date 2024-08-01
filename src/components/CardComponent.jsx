import { Card } from "antd";

export const CardComponent = ({ dir, children }) => {
  return (
    <Card
      bordered={false}
      style={{
        width: 300,
        borderRadius: dir ? " 0 25px 25px 0" : "25px 0 0 25px",
      }}
    >
      <div
        className={`${
          dir && "flex-row-reverse"
        } flex items-center justify-between`}
      >
        <div
          className={`rounded-full h-10 w-10 ${children && "bg-green-500"}`}
        ></div>
        <p className="font-semibold text-xl">{children}</p>
      </div>
    </Card>
  );
};
