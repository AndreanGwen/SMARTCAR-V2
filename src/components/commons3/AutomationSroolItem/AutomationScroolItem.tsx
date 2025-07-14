import { MdDateRange } from "react-icons/md";

interface PropTypes {
  title: string;
  icon: any;
}

const AutomationScroolItem = (props: PropTypes) => {
  const { title, icon } = props;
  return (
    <div className="w-full bg-blue-600/90 h-10 flex items-center justify-center gap-2 rounded-2xl p-3">
      {icon}
      <p className="text-sm font-bold text-white">{title}</p>
    </div>
  );
};

export default AutomationScroolItem;
