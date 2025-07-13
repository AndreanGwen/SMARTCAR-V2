import { Alert } from "@heroui/react";
import { LuLayoutDashboard } from "react-icons/lu";
import CardModule from "../CardModule";
import { useState } from "react";

const BodyPage = () => {
  const [cardStyle, setCardStyle] = useState(false);

  const endPoint = process.env.NEXT_PUBLIC_ENDPOINT;

  return (
    <div className="w-full h-2/4  bg-black p-4">
      <div className="">
        <Alert
          color="primary"
          title={`This app using static endpoint!`}
          variant="flat"
          key="flat"
          radius="md"
        />
      </div>

      <div className="flex my-3 items-center justify-between">
        <h1 className="text-white  text-xl font-bold">Your Products</h1>
        <LuLayoutDashboard
          color="white"
          size={25}
          onClick={() => {
            setCardStyle(!cardStyle);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div
        className={`flex gap-3 ${
          cardStyle == true ? "justify-center" : "flex-col"
        }`}
      >
        <CardModule
          title="Smart Car EsP"
          desc={endPoint?.toString() || "http://localhost:3000"}
          status={cardStyle}
          image="/quickControl/car.jpg"
        />
        <CardModule
          title="Smart Home"
          desc="eP : -"
          status={cardStyle}
          image="/quickControl/sHome.jpg"
        />
      </div>
    </div>
  );
};

export default BodyPage;
