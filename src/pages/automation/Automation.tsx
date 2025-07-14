import FootPage from "@/components/commons/FootPage";
import AutomationScroolItem from "@/components/commons3/AutomationSroolItem";
import { MdAccessAlarm, MdAddRoad, MdDateRange } from "react-icons/md";
import { VscTerminalCmd } from "react-icons/vsc";

const Automation = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <div className="w-screen bg-gradient-to-b from-blue-950 to-blue-700 pr-5 pl-5 pt-14 pb-14 text-white flex flex-col">
        <h1 className="text-lg font-bold">Automation</h1>
      </div>

      <div className="w-full h-16  mt-10  flex items-center gap-4 overflow-x-auto justify-start whitespace-nowrap px-4 scroll-smooth scrollbar-hide">
        <AutomationScroolItem
          icon={<MdDateRange color="white" />}
          title="Schedules"
        />
        <AutomationScroolItem
          icon={<MdAccessAlarm color="white" />}
          title="Routines"
        />
        <AutomationScroolItem
          icon={<VscTerminalCmd color="white" />}
          title="SpaceSense"
        />
        <AutomationScroolItem
          icon={<MdAddRoad color="white" />}
          title="Rhythms"
        />
      </div>

      <FootPage height="h-screen"></FootPage>
    </div>
  );
};

export default Automation;
