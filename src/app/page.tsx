import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import Hoome from "@/components/Home/Hoome";
import { client } from "@/sanity/lib/client";



export default async function Home() {
  return (
    <>
      <Navbar/>
      <Hoome/>
      <Footer/>
    </>
  );
}
