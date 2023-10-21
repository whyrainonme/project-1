import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home_page";
import About from "./pages/About_page";
import Service from "./pages/Service_page";
import Artist from "./pages/Artist_page";
import Contest from "./pages/Contest_Page";
import Shop from "./pages/Shop_page";
import Gallery from "./pages/Gallery_page";
import Board from "./pages/Board_page";
import News from "./pages/News_page";
import Contact from "./pages/Contact_page";

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
            <Route path="/connta" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/board" element={<Board />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )
      }

      <Footer />
    </>
  );
}