import { Route, Routes } from "react-router-dom";
import CreateProduct from "./components/Create Product/CreateProduct";
import CreateRecipe from "./components/Create Recipe/CreateRecipe";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/Not Found Page/NotFound";
import PasswordReset from "./components/Password Reset/PasswordReset";
import ProductsCatalog from "./components/Products Catalog/ProductsCatalog";
import Profile from "./components/Profile/Profile";
import RecipesCatalog from "./components/Recipes Catalog/RecipesCatalog";
import Register from "./components/Register/Register";
import { PrublicProvider } from "./contexts/PublicationContext";
import { AuthProvider } from "./contexts/UserContext";

function App() {
    return (
        <>
            <AuthProvider>
                <PrublicProvider>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/catalog-recipes" element={<RecipesCatalog />} />
                            <Route path="/catalog-products" element={<ProductsCatalog />} />
                            <Route path="/create-recipes" element={<CreateRecipe />} />
                            <Route path="/create-products" element={<CreateProduct />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/details/:recipeId" element={<Details />} />
                            <Route path="/password-reset" element={<PasswordReset />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </PrublicProvider>
            </AuthProvider>
        </>
    );
}

export default App;
