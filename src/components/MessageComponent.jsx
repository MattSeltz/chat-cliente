import { Card } from "antd";

export const MessageComponent = ({ dir, children, group }) => {
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
        {group && <p className="font-semibold text-xl">{children}</p>}
        <p className="font-semibold text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          corrupti libero labore sed et dolorem reiciendis mollitia iste,
          voluptas voluptate ut soluta illo ad repellat officia, vel ipsa, autem
          doloribus?
        </p>
      </div>
    </Card>
  );
};
