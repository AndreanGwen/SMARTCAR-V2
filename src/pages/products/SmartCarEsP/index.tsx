import FootPage from "@/components/commons/FootPage";
import PageHead from "@/components/commons/PageHead";
import BodyPage from "@/components/commons2/BodyPage";
import TopPage from "@/components/commons2/TopPage";

const SmartCarEsP = () => {
  return (
    <div className="w-screen bg-black">
      <PageHead title="IOT | SmartCarEsP" />
      <TopPage />
      <BodyPage />
      <FootPage height="h-56" />
    </div>
  );
};

export default SmartCarEsP;
