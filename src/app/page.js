import SeccionServicios from "../components/layout/SeccionServicios";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Slider from "@/components/common/Slider";
import SliderSecundario from "@/components/common/SliderSecundario";
import SeccionLogros from "@/components/layout/SeccionLogros";
import SeccionNoticias from "@/components/layout/SeccionNoticias";
import SeccionVarios from "@/components/layout/SeccionVarios";
import SeccionDescargaApp from "@/components/layout/SeccionDescargaApp";
import MobileNav from "@/components/layout/MobileNav";
import SearchPopup from "@/components/layout/SearchPopup";

export default function Home() {
  return (
    <>
      <div class="custom-cursor__cursor"></div>
      <div class="custom-cursor__cursor-two"></div>


      {/* <div class="preloader">
        <div class="preloader__image"></div>
      </div> */}
      
      <div className="page-wrapper">
        <Header></Header>
        <Slider></Slider>
        <SeccionServicios></SeccionServicios>
        <SliderSecundario></SliderSecundario>
        <SeccionLogros></SeccionLogros>
        <SeccionNoticias />
        <SeccionVarios></SeccionVarios>
        <SeccionDescargaApp></SeccionDescargaApp>

        <Footer></Footer>
      </div>
      <div className="mobile-nav__wrapper">
        <MobileNav></MobileNav>
      </div>
      <SearchPopup />
      <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fas fa-arrow-up"></i></a>
    </>
  );
}
