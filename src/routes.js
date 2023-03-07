import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
function RoutesApp() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/portfolio" element={<Home />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}
export default RoutesApp;