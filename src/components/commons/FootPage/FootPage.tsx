import Link from "next/link";
import { CiAlignBottom, CiBoxList, CiCloud, CiHome } from "react-icons/ci";

interface PropTypes {
  height?: string;
}

const FootPage = ({ height }: PropTypes) => {
  return (
    <div
      className={`bg-black w-full ${
        height ? height : "h-72"
      }  items-end flex justify-center pt-3`}
    >
      <div className="w-full h-16 border-t-1 border-slate-900 flex items-center justify-around">
        <Link href="/">
          <div className="flex flex-col items-center justify-center gap-1">
            <CiHome color="white" size={25} />
            <p className="text-white text-sm">Home</p>
          </div>
        </Link>

        <Link href="/library">
          <div className="flex flex-col items-center justify-center gap-1">
            <CiAlignBottom color="white" size={25} />
            <p className="text-white text-sm">Library</p>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-center gap-1">
          <CiBoxList color="white" size={25} />
          <p className="text-white text-sm">Automation</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <CiCloud color="white" size={25} />
          <p className="text-white text-sm">Discover</p>
        </div>
      </div>
    </div>
  );
};
export default FootPage;
