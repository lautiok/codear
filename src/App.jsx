import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./page/Home";
import { Footer } from "./components/Footer/Footer";
import { AboutUs } from "./page/AboutUs";
import { SolucionesDigitales } from "./page/SolucionesDigitales";
import { SitiosWeb } from "./page/SitiosWeb";
import { HelmetProvider } from "react-helmet-async";
import { Ecommerce } from "./page/Ecommers";
import { Plantilla } from "./page/Plantlla";
import { NoFount } from "./page/NoFount";
import { Seo } from "./page/Seo";
import { EmailMarketing } from "./page/EmailMarketing";
import { Servicios } from "./page/Servicios";
import { EnContruccion } from "./components/EnContruccion/EnContruccion";
import { Proyectos } from "./page/Proyectos";
import { Contact } from "./page/Contact";
import { PoliticaPrivacidades } from "./page/PoliticaPrivacidades";
import { TerminosCondiciones } from "./page/TerminosCondiciones";
import { Blog } from "./page/Blog";
import { Cotizacion } from "./page/Cotizacion";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobrenosotros" element={<AboutUs />} />
            <Route
              path="/solucionesdigitales"
              element={<SolucionesDigitales />}
            />
            <Route path="/sitiosweb" element={<SitiosWeb />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/plantillasweb" element={<Plantilla />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/emailmarketing" element={<EmailMarketing />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cotizaciones" element={<Cotizacion />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contact />} />
            <Route
              path="/politicaprivacidad"
              element={<PoliticaPrivacidades />}
            />
            <Route
              path="/terminoscondiciones"
              element={<TerminosCondiciones />}
            />
            <Route path="/team" element={<EnContruccion />} />
            <Route path="*" element={<NoFount />} />
          </Routes>
          <Footer />
        </BrowserRouter>{" "}
      </HelmetProvider>
    </>
  );
}

export default App;
