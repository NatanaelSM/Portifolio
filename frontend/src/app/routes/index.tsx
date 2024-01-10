import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../shared/components/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
      </Routes>
    </BrowserRouter>
  );
};
