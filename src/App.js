import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Home from "./Components/Elements/Home";
import Myufone from "./Pages/Myufone";
import Onlinerecharge from "./Pages/Onlinerecharge";
import Newsim from "./Pages/Newsim";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/myufone" element={<Myufone/>}/>
            <Route index path="/recharge" element={<Onlinerecharge/>}/>
            <Route index path="/newsim" element={<Newsim/>}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
