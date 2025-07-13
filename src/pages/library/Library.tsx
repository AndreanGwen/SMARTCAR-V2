import FootPage from "@/components/commons/FootPage";
import CategoriesCard from "@/components/commons3/CategoriesCard";

const Library = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <div className="w-screen bg-gradient-to-b from-blue-950 to-blue-700 pr-5 pl-5 pt-12 pb-12 text-white flex flex-col">
        <h1 className="text-2xl font-bold">Library</h1>
      </div>

      <div className="w-full p-8">
        <h1 className="text-white text-lg font-bold">Categories</h1>
      </div>

      <div className="pr-8 pl-8 flex flex-col gap-4">
        <CategoriesCard
          image="/libraryAsset/furniture-1.jpg"
          title="Static light"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita praesentium aperiam earum?"
        />
        <CategoriesCard
          image="/libraryAsset/furniture-2.jpg"
          title="Dynamic light"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita praesentium aperiam earum?"
        />
        <CategoriesCard
          image="/libraryAsset/furniture-3.jpg"
          title="Music sync"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita praesentium aperiam earum?"
        />
      </div>

      <FootPage height="h-screen" />
    </div>
  );
};

export default Library;
