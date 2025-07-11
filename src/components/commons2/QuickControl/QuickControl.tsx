import { CgDanger } from "react-icons/cg";
import { FaGripLinesVertical, FaRegLightbulb } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineSettingsInputComponent } from "react-icons/md";

const QuickControl = () => {
  return (
    <div className="flex gap-8 pt-3 overflow-x-auto">
      <div className="flex flex-col items-center justify-center">
        <MdOutlineSettingsInputComponent color="white" />
        <p className="text-white text-sm text-center">Control</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <FaGripLinesVertical color="white" />
        <p className="text-white text-sm text-center">LineTracking</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <CgDanger color="white" />
        <p className="text-white text-sm text-center">Obstacle</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IoSpeedometerOutline color="white" />
        <p className="text-white text-sm text-center">CControl</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FaRegLightbulb color="white" />
        <p className="text-white text-sm text-center">LSystem</p>
      </div>
    </div>
  );
};

export default QuickControl;
