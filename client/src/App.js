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
import { PublicProvider } from "./contexts/PublicationContext";
import { AuthProvider } from "./contexts/UserContext";
import ProductDetails from "./components/Product Details/ProductDetails";
import PrivateRoute from "./guards/PrivateRoute";
import RouteGuard from "./guards/RouteGuard";
import EditRecipe from "./components/Edit Recipe/EditRecipe";

function App() {
    return (
        <>
            <AuthProvider>
                <PublicProvider>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog-recipes" element={<RecipesCatalog />} />
                            <Route path="/catalog-products" element={<ProductsCatalog />} />
                            <Route path="*" element={<NotFound />} />

                            <Route
                                path="/login"
                                element={
                                    <RouteGuard>
                                        <Login />
                                    </RouteGuard>
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <RouteGuard>
                                        <Register />
                                    </RouteGuard>
                                }
                            />

                            <Route
                                path="/create-recipes"
                                element={
                                    <PrivateRoute>
                                        <CreateRecipe />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/create-products"
                                element={
                                    <PrivateRoute>
                                        <CreateProduct />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <PrivateRoute>
                                        <Profile />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/logout"
                                element={
                                    <PrivateRoute>
                                        <Logout />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/details/recipes/:recipeId"
                                element={
                                    <PrivateRoute>
                                        <Details />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/details/products/:productId"
                                element={
                                    <PrivateRoute>
                                        <ProductDetails />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/password-reset"
                                element={
                                    <PrivateRoute>
                                        <PasswordReset />
                                    </PrivateRoute>
                                }
                            />
                            <Route 
                                path="/details/edit/:recipeId"
                                element={
                                    <PrivateRoute>
                                        <EditRecipe />
                                    </PrivateRoute>
                                }
                            />
                        </Routes>
                    </main>
                    <Footer />
                </PublicProvider>
            </AuthProvider>
        </>
    );
}

export default App;
