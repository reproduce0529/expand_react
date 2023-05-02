import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Header from "./Header";
import Index_header from "./Index_header";
import Footer from "./Footer";
import History from "./History";
import Intro from "./Intro";
import Investment from "./Investment";
import Members from "./Members";
import Notice from "./Notice";
import Partners from "./Partners";
import Service from "./Service";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index_header />}></Route>
      <Route path="/Itr" element={<Header />}></Route>
      <Route path="/N" element={<Header />}></Route>
      <Route path="/S" element={<Header />}></Route>
      <Route path="/M" element={<Header />}></Route>
      <Route path="/Ivm" element={<Header />}></Route>
      <Route path="/H" element={<Header />}></Route>
      <Route path="/P" element={<Header />}></Route>
    </Routes>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Itr" element={<Intro />}></Route>
      <Route path="/N" element={<Notice />}></Route>
      <Route path="/S" element={<Service />}></Route>
      <Route path="/M" element={<Members />}></Route>
      <Route path="/Ivm" element={<Investment />}></Route>
      <Route path="/H" element={<History />}></Route>
      <Route path="/P" element={<Partners />}></Route>
    </Routes>


    <Routes>
      <Route path="/Itr" element={<Footer />}></Route>
      <Route path="/N" element={<Footer />}></Route>
      <Route path="/S" element={<Footer />}></Route>
      <Route path="/M" element={<Footer />}></Route>
      <Route path="/Ivm" element={<Footer />}></Route>
      <Route path="/H" element={<Footer />}></Route>
      <Route path="/P" element={<Footer />}></Route>
    </Routes>

  </BrowserRouter>
);

reportWebVitals();
