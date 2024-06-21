import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import CYRMockUp from "./CYRMockUp/CYRMockUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CYRMockUp />} />
          <Route path="CYRMockUp" element={<CYRMockUp />} />
          <Route path="Home" element={<Home />} />
          <Route path="*" element={<CYRMockUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
