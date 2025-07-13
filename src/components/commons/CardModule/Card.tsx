import { Card, CardHeader, Image, Switch } from "@heroui/react";
import Link from "next/link";

interface PropTypes {
  title: string;
  desc: string;
  status: boolean;
  mode: boolean;
  onClick: () => void;
  image: string;
}

const CardModule = (props: PropTypes) => {
  const { title, desc, status, mode, onClick, image } = props;

  return (
    <div className="flex items-center bg-blue-950 p-2 rounded-2xl justify-between">
      <Link href={`/products/${title.replace(/\s+/g, "")}`}>
        <Card className={`bg-blue-600/70 ${status == true ? "w-36" : ""} flex`}>
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src={image}
              width={40}
              className={`${status == true ? "hidden" : ""}`}
            />

            <div
              className={`flex  w-full  ${
                status == true
                  ? "h-full justify-center items-center gap-3"
                  : "justify-between items-center"
              }`}
            >
              <div className="flex flex-col">
                <p
                  className={`text-md text-white ${
                    status == true ? "text-sm" : ""
                  }`}
                >
                  {title}
                </p>
                <p
                  className={`text-small text-white ${
                    status == true ? "hidden" : ""
                  }`}
                >
                  {desc}
                </p>
                <p className="text-white text-sm">
                  Status: {mode ? "ON" : "OFF"}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Link>
      <Switch
        color="success"
        className="z-50"
        isSelected={mode}
        onChange={onClick}
      />
    </div>
  );
};

export default CardModule;
