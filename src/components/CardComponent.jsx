import { Card } from "antd";
import { Link } from "react-router-dom";

export const CardComponent = ({ dir, children }) => {
  return (
    <Link to={`/chat/${1}`}>
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
          <div className="bg-green-500 rounded-full h-10 w-10"></div>
          <p className="font-semibold text-xl">{children}</p>
        </div>
      </Card>
    </Link>
  );
};
