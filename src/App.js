/* eslint-disable no-unused-vars */
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { useEffect } from "react";
import Inventory from "./components/Inventory";
import ManageInventory from "./components/ManageInventory";
import AddInventory from "./components/AddInventory";
import Login from "./components/Login";
import Register from "./components/Register";
import Private from "./components/Private";
import MyItems from "./components/MyItems";
import Footer from "./components/Footer";
import Blog from "./components/Blog"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const title = pathname.split('/');
    document.title = `${title[1]} M.N.A Car Dealer`;
  }, [pathname]);


  const [user,loading,error] = useAuthState(auth);




  return (
    <div className="min-h-screen flex flex-col justify-between">

      <Header/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/home" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory/:id" element={<Private>
          <Inventory/>
        </Private>}/>
        {
          user &&
          <>
            <Route path="/manage-inventory" element={<ManageInventory/>} />
            <Route path="/add-inventory" element={<AddInventory/>} />
            <Route path="/my-items" element={<MyItems/>} />
          </>
        }
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
