import { Card } from "antd";

export const MessageComponent = ({ dir, children, group, author }) => {
  return (
    <Card
      bordered={false}
      style={{
        width: 300,
        borderRadius: dir ? " 0 25px 25px 0" : "25px 0 0 25px",
      }}
    >
      <div>
        <div className="flex justify-between">
          <p className="text-xs">31/07/24</p>
          <p className="text-xs">19:52</p>
        </div>
        {group && <p className="font-semibold text-xl">{author}</p>}
        <p className="font-semibold text-xl">{children}</p>
      </div>
    </Card>
  );
};
