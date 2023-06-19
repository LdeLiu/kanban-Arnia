import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/register";
import { Home } from "../pages/home/Home";

export function Rotas (){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path="/"/>
                <Route element={<Register/>} path="/register"/>
                <Route element={<Home/>} path="/home"/>
            </Routes>
        </BrowserRouter>
    )
}