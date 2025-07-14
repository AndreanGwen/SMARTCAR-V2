import CardModule from "@/components/commons/CardModule";
import { LuLayoutDashboard } from "react-icons/lu";
import QuickControl from "../QuickControl";
import { useState } from "react";

const BodyPage = () => {
  const [status, setStatus] = useState(false);
  const [leftLight, setLeftLight] = useState(false);
  const [rightLight, setRightLight] = useState(false);
  const [hazard, setHazard] = useState(false);
  const [obstacle, setObstacle] = useState(false);

  const endPoint = process.env.NEXT_PUBLIC_ENDPOINT;

  const setInfoL = () => {
    fetch(endPoint + "/kiri", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((data) =>
        data == "ON" ? setLeftLight(true) : setLeftLight(false)
      );
  };

  const setLeftL = () => {
    fetch(endPoint + "/kiri", {
      method: "POST",
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
    setLeftLight(!leftLight);
  };

  const setInfoR = () => {
    fetch(endPoint + "/kanan", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((data) =>
        data == "ON" ? setRightLight(true) : setRightLight(false)
      );
  };

  const setRightR = () => {
    fetch(endPoint + "/kanan", {
      method: "POST",
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
    setRightLight(!rightLight);
  };

  const setInfoH = () => {
    fetch(endPoint + "/danger", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((data) => (data == "ON" ? setHazard(true) : setHazard(false)));
  };

  const setHazardL = () => {
    fetch(endPoint + "/danger", {
      method: "POST",
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
    setHazard(!hazard);
  };

  const setInfoO = () => {
    fetch(endPoint + "/obstacle", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((data) => (data == "ON" ? setObstacle(true) : setObstacle(false)));
  };

  const setObstacleM = () => {
    fetch(endPoint + "/obstacle", {
      method: "POST",
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
    setObstacle(!obstacle);
  };

  setInfoL();
  setInfoR();
  setInfoH();
  setInfoO();

  return (
    <div className="pt-9 pl-4 pr-4 w-full ">
      <h1 className="text-white font-bold text-2xl">Quick control</h1>
      <QuickControl />
      <div className="flex justify-between items-center w-full pt-5">
        <h1 className="text-white text-xl font-bold">Fitures :</h1>
        <LuLayoutDashboard
          color="white"
          size={25}
          style={{ cursor: "pointer" }}
          onClick={() => setStatus(!status)}
        />
      </div>

      <div
        className={`flex ${
          status == true ? "flex-wrap justify-center " : "flex-col"
        } gap-3 pt-5`}
      >
        <CardModule
          title="Hazard mode"
          desc="Smart Car"
          status={status}
          mode={hazard}
          onClick={() => setHazardL()}
          image="/quickControl/hazard.jpg"
        />
        <CardModule
          title="Left light"
          desc="Smart Car"
          status={status}
          mode={leftLight}
          onClick={() => {
            setLeftL();
          }}
          image="/quickControl/light.jpg"
        />
        <CardModule
          title="Right light"
          desc="Smart Car"
          status={status}
          mode={rightLight}
          onClick={() => setRightR()}
          image="/quickControl/light.jpg"
        />
        <CardModule
          title="Obstacle mode"
          desc="Smart Car"
          status={status}
          mode={obstacle}
          onClick={() => setObstacleM()}
          image="/quickControl/danger.jpg"
        />
        <CardModule title="Tracking mode" desc="Smart Car" status={status} />
        <CardModule title="Manual mode" desc="Smart Car" status={status} />
      </div>
    </div>
  );
};

export default BodyPage;
