import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { useEffect } from "react";
import Inventory from "./components/Inventory";


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const title = pathname.split('/');
    document.title = `${title[1]} M.N.A Car Dealer`;
  }, [pathname]);


  return (
    <div className="">

      <Header/>

      <Routes>
        <Route path="/home" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/inventory/:id" element={<Inventory/>}/>

        

        <Route path="/*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
