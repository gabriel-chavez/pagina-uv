import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from "next/font/google";
import "./globals.css";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import SearchPopup from "@/components/layout/SearchPopup";
import BootstrapClient from '@/components/BootstrapClient';
import SessionAuthProvider from '@/context/SessionAuthProvider';


import Script from 'next/script';



const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Univida",
  description: "Sitio web Univida",
};

export default function RootLayoutxxx({ children }) {
  return (
    <html lang="en">
      <head>
        {/* favicons Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />
        <meta name="description" content="Sonchoy HTML 5 Template" />

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Vendor CSS */}
        {/* <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" /> */}
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/custom-animate.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        {/* <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" /> */}
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/sonchoy-icon/style.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        {/* <link rel="stylesheet" href="/assets/vendors/bootstrap-select/css/bootstrap-select.min.css" /> */}
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/vendors/nice-select/nice-select.css" />

        {/* template styles */}
        <link rel="stylesheet" href="/assets/css/sonchoy.css" />
        <link rel="stylesheet" href="/assets/css/sonchoy-responsive.css" />
        <link rel="stylesheet" href="/assets/css/sonchoy-convocatoria.css" />
      </head>

      <body >
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        {/* <div className="preloader">
          <div className="preloader__image"></div>
        </div> */}
        <div className="page-wrapper">
          <Header></Header>
          <SessionAuthProvider>






            {children}



          </SessionAuthProvider>


          <Footer></Footer>
        </div>
        <div className="mobile-nav__wrapper">
          <MobileNav></MobileNav>
        </div>
        <SearchPopup />
        <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fas fa-arrow-up"></i></a>

        <BootstrapClient></BootstrapClient>
        {/* scripts  */}
        <Script src="/assets/vendors/jquery/jquery-3.6.0.min.js" />
        {/* comentado <script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" /> */}
        {/* comentado<script src="/assets/vendors/jarallax/jarallax.min.js" /> */}
        <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" />
        <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" />
        <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" />
        <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" />
        <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" />
        <Script src="/assets/vendors/odometer/odometer.min.js" />
        {/* comentado<script src="/assets/vendors/swiper/swiper.min.js" /> */}
        <Script src="/assets/vendors/wnumb/wNumb.min.js" />
        <Script src="/assets/vendors/wow/wow.js" />
        <Script src="/assets/vendors/isotope/isotope.js" />
        {/* comentado<script src="/assets/vendors/owl-carousel/owl.carousel.min.js" />  */}
        {/* comentado<script src="/assets/vendors/bootstrap-select/js/bootstrap-select.min.js" /> */}
        <Script src="/assets/vendors/jquery-ui/jquery-ui.js" />
        <script src="/assets/vendors/jquery.circle-type/jquery.circleType.js" />
        <script src="/assets/vendors/jquery.circle-type/jquery.lettering.min.js" />
        <script src="/assets/vendors/nice-select/jquery.nice-select.min.js" />
        <script src="/assets/vendors/marquee/marquee.min.js" />
        {/* Fin de los scripts */}
        {/* comentado<script src="/assets/js/sonchoy.js"></script> */}
        <Script src="/assets/vendors/jquery/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/odometer/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/wnumb/wNumb.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/wow/wow.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/isotope/isotope.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-ui/jquery-ui.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery.circle-type/jquery.circleType.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery.circle-type/jquery.lettering.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/nice-select/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/marquee/marquee.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
