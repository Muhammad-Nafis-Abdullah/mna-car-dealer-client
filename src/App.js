import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";


function App() {


  return (
    <div className="">

      <Header/>

      <Routes>
        <Route path="/" element={''}/>

        

        <Route path="/*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
