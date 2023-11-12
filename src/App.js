import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home_page";

import Connta from "./pages/CONNTA_page";
import Introduce from "./pages/CONNTA_page/categories/introduce";
import DesignConsult from "./pages/CONNTA_page/categories/design_consult";
import News from "./pages/CONNTA_page/categories/news";
import Events from "./pages/CONNTA_page/categories/events";

import Artist from "./pages/Artist_page";
import LicenseMarket from "./pages/Artist_page/categories/license_market";
import Gallery from "./pages/Artist_page/categories/gallery";

import Performance from "./pages/Performance_page";

import Collabo from "./pages/Collabo_page";

import Shop from "./pages/Shop_page";

import Contact from "./pages/Contact_page";

// 404 page
import NotFoundPage from "./pages/NotFound_page";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// import * as database from "./database";

// import { setPosts } from "./redux/example";
// import { useDispatch } from "react-redux";

import Loading from "./components/Loading";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // IIFE - Immediately Invoked Function Expression
    (async () => {

      // Load the database
      // const data = await database.load();
      setIsLoading(false);
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />

      {isLoading
        ? (
          <Loading />
        )
        : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/connta" element={<Connta />} />
            <Route path="/connta/introduce" element={<Introduce />} />
            <Route path="/connta/design_consult" element={<DesignConsult />} /> 
            <Route path="/connta/news" element={<News />} />
            <Route path="/connta/events" element={<Events />} />

            <Route path="/artist" element={<Artist />} />
            <Route path="/artist/license_market" element={<LicenseMarket />} />
            <Route path="/artist/gallery" element={<Gallery />} />

            <Route path="/performance" element={<Performance />} />

            <Route path="/collabo" element={<Collabo />} />

            <Route path="/shop" element={<Shop />} />
            
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )
      }

      <Footer />
    </>
  );
}