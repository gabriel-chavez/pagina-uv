import SeccionServicios from "@/components/layout/secciones/SeccionServicios";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Slider from "@/components/common/Slider";
import SliderSecundario from "@/components/common/SliderSecundario";
import SeccionLogros from "@/components/layout/secciones/SeccionLogros";
import SeccionNoticias from "@/components/layout/secciones/SeccionNoticias";
import SeccionVarios from "@/components/layout/secciones/SeccionVarios";
import SeccionDescargaApp from "@/components/layout/secciones/SeccionDescargaApp";
import MobileNav from "@/components/layout/MobileNav";
import SearchPopup from "@/components/layout/SearchPopup";

export default function Home() {
  return (
    <>
       <Slider></Slider>
      <SeccionServicios></SeccionServicios> 
      <SliderSecundario></SliderSecundario>
      <SeccionLogros></SeccionLogros>
      <SeccionNoticias />
      <SeccionVarios></SeccionVarios>
      <SeccionDescargaApp></SeccionDescargaApp>


    </>
  );
}
