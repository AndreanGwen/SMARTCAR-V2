import { Button, Card, CardBody, Input } from "@heroui/react";
import { use, useState } from "react";
import { CiBookmarkPlus, CiSettings, CiUser } from "react-icons/ci";

const TopPage = () => {
  const [name, setName] = useState("John Doe");
  const [status, setStatus] = useState(false);

  const settingsClick = () => {
    setStatus(!status);
  };

  return (
    <>
      <div className="w-screen  bg-gradient-to-b from-blue-950 to-blue-700 pr-5 pl-5 pt-7 pb-7 text-white flex flex-col ">
        <div className="flex justify-end  gap-3">
          <CiBookmarkPlus className="w-7 h-7" style={{ cursor: "pointer" }} />
          <CiSettings
            className="w-7 h-7"
            onClick={() => settingsClick()}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={`flex items-center gap-4`}>
          <div className="w-12 h-12 bg-slate-300 bg-white/10 rounded-lg flex items-center justify-center">
            <CiUser className="w-10 h-10" />
          </div>
          <div className="">
            <h1 className="font-bold">Hello, {name}</h1>
            <p>Welcome to your products!</p>
          </div>
        </div>

        {!status && (
          <div className="pt-3">
            <Card>
              <CardBody className="flex gap-2">
                <Input
                  label="Username"
                  type="text"
                  variant="bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default TopPage;
