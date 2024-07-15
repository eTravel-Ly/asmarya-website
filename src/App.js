import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  Home,
  Login,
  LoginRegister,
  HomeAfterLogin
} from "./page/index";
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/LoginRegister" element={<LoginRegister/>}/>
     <Route path="/HomeAfterLogin" element={<HomeAfterLogin/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
