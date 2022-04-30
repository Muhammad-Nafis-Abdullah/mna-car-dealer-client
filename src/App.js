import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { useEffect } from "react";


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

        

        <Route path="/*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
