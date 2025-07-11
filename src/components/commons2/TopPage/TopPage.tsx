import { Switch } from "@heroui/react";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowLeft, FaCar } from "react-icons/fa";

const TopPage = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-blue-950 to-blue-700 pr-5 pl-5 pt-7 pb-7 text-white flex flex-col gap-6">
      <div className="flex justify-between">
        <Link href={"/"}>
          <FaArrowLeft size={25} className="cursor-pointer" />
        </Link>
        <BsThreeDots size={25} />
      </div>
      <div className="flex items-center gap-4 pl-5 pb-5">
        <FaCar />
        <h1 className="text-lg font-bold">Smart Car EsP</h1>
        <Switch color="success" className="z-10 ml-auto" />
      </div>
    </div>
  );
};

export default TopPage;
