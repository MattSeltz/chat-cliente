import { Card } from "antd";

export const CardComponent = ({ dir, children }) => {
  return (
    <Card
      bordered={false}
      style={{
        width: 300,
        borderRadius: "25px 0 0 25px",
      }}
    >
      <div
        className={`${
          dir && "flex-row-reverse"
        } flex items-center justify-between`}
      >
        <div className="bg-green-500 rounded-full h-10 w-10"></div>
        <p className="font-semibold text-xl">{children}</p>
      </div>
    </Card>
  );
};
