import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RecipesCatalog from "./components/Recipes Catalog/RecipesCatalog";
import Register from "./components/Register/Register";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/catalog" element={<RecipesCatalog />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
