import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import Hoome from "@/components/Home/Hoome";

export default async function Home() {
  return (
    <>
      <Navbar/>
      <Hoome/>
      <Footer/>
    </>
  );
}
