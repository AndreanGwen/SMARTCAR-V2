import BodyPage from "@/components/commons/BodyPage";
import FootPage from "@/components/commons/FootPage";
import TopPage from "@/components/commons/TopPage";

const HomePage = () => {
  return (
    <div className="h-screen">
      <TopPage />
      <BodyPage />
      <FootPage />
    </div>
  );
};

export default HomePage;
