import './App.css';
import Headers from "./component/Headers/Headers";
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import Promotion from "./component/pages/Promotion/Promotion";
import Rolls from "./component/pages/menu/Rolls/Rolls";
import Sushi from "./component/pages/menu/Sushi/Sushi";
import Sets from "./component/pages/menu/Sets/Sets";
import Woks from "./component/pages/menu/Woks/Woks";
import Salads from "./component/pages/menu/Salads/Salads";
import Basket from "./component/pages/menu/Basket/Basket";
import Delivery from "./component/pages/Delivery/Delivery";
import AboutUs from "./component/pages/AboutUs/AboutUs";
import Contacts from "./component/pages/Contacts/Contacts";
import {YMaps} from "@pbe/react-yandex-maps";
import Footer from "./component/Footer/Footer";
import Home from "./component/pages/Home/Home";
import HeaderMenu from "./component/Headers/HeaderMenu/HeaderMenu";
import React from "react";
import OtherMenu from "./component/OtherMenu/OtherMenu";
import useResize from "./myHook/useResize";
import ScrollToTop from "./utils/ScrollToTop";
import SearchProduct from "./component/pages/menu/SearchProduct/SearchProduct";
import HotDishes from "./component/pages/menu/HotDishes/HotDishes";
import Desserts from "./component/pages/menu/Desserts/Desserts";
import Pizza from "./component/pages/menu/Pizza/Pizza";

function App() {
    let widthViewport = useResize();

    return (
        // <HashRouter basename={process.env.PUBLIC_URL}>
            <BrowserRouter>
            <ScrollToTop/>
            <div className="App">
                <Headers/>
                {widthViewport > 991 && <HeaderMenu/>}
                <Routes>
                    <Route path={'/*'} element={<Home/>}/>
                    <Route path={'/promotion'} element={<Promotion/>}/>
                    <Route path={'/rolls'} element={<Rolls/>}/>
                    <Route path={'/sushi'} element={<Sushi/>}/>
                    <Route path={'/sets'} element={<Sets/>}/>
                    <Route path={'/wok'} element={<Woks/>}/>
                    <Route path={'/salads'} element={<Salads/>}/>
                    <Route path={'/pizza'} element={<Pizza/>}/>
                    <Route path={'/desserts'} element={<Desserts/>}/>
                    <Route path={'/hotDishes'} element={<HotDishes/>}/>
                    <Route path={'/basket'} element={<Basket/>}/>
                    <Route path={'/delivery'} element={<Delivery/>}/>
                    <Route path={'/aboutUs'} element={<AboutUs/>}/>
                    <Route path={'/contacts'} element={<YMaps><Contacts/></YMaps>}/>
                    <Route path={'/search'} element={<SearchProduct/>}/>
                </Routes>
                <OtherMenu/>
                <Footer/>
            </div>
            </BrowserRouter>
        ///*</HashRouter>*/
    );
}

export default App;
