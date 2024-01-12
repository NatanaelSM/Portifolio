import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../shared/components/header";
import { Home } from "../pages/home";
import { Footer } from "../shared/components/footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
