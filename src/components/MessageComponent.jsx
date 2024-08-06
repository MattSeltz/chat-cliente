import { Card, Badge } from "antd";

export const MessageComponent = ({ dir, children, id, socket }) => {
  return (
    <Badge.Ribbon
      placement={id._id === socket ? "start" : "end"}
      text={id.nombre}
    >
      <Card
        bordered={false}
        style={{
          width: 300,
          borderRadius: dir ? " 0 25px 25px 0" : "25px 0 0 25px",
        }}
      >
        <div className="border-b-2 my-3"></div>
        <div>
          <div className="flex justify-between">
            <p className="text-xs">31/07/24</p>
            <p className="text-xs">19:52</p>
          </div>
          <p className="font-semibold text-xl">{children}</p>
        </div>
      </Card>
    </Badge.Ribbon>
  );
};
