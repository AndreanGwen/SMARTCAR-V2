import { Inter } from "next/font/google";
import PageHead from "@/components/commons/PageHead";
import HomePage from "@/components/views/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageHead title="IOT | Home" />
      <HomePage />
    </>
  );
}
