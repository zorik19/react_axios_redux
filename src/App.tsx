import {Route, Routes} from 'react-router-dom'
import {ProductPages} from "./pages/ProductPages";
import {AboutPage} from "./pages/AboutPages";
import {Navigation} from "./components/Navigation";
import {HomePage} from "./pages/HomePage";
import {FavoritePage} from "./pages/FavaritePage";
import {MainPortPage} from "./pages/MainPortPage";
import {AuthPage} from "./pages/AuthPage";
import {AirportDetailPage} from "./pages/AirportDetailPage";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element = { <HomePage/> }/>
                <Route path="/favorite" element = { <FavoritePage/> }/>
                <Route path="/product" element = { <ProductPages/> }/>
                <Route path="/about" element = { <AboutPage/> }/>
                <Route path="/main-port" element = { <MainPortPage/> }/>
                <Route path="/auth" element = { <AuthPage/> }/>
                <Route path="/airport/:id" element = { <AirportDetailPage/> }/>
            </Routes>
        </>
    )
}

export default App;
//dir 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

