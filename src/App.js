import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";


function App() {


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
