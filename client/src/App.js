import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { PublicProvider } from "./contexts/PublicationContext";
import { AuthProvider } from "./contexts/UserContext";
import CreateProduct from "./components/Create Product/CreateProduct";
import CreateRecipe from "./components/Create Recipe/CreateRecipe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Profile from './components/Profile/Profile';
import Login from "./components/Login/Login";
import NotFound from "./components/Not Found Page/NotFound";
import ProductsCatalog from "./components/Products Catalog/ProductsCatalog";
import RecipesCatalog from "./components/Recipes Catalog/RecipesCatalog";
import Register from "./components/Register/Register";
import ProductDetails from "./components/Product Details/ProductDetails";
import PrivateRoute from "./guards/PrivateRoute";
import RouteGuard from "./guards/RouteGuard";
import Spinner from "./components/Spinner/Spinner";
import UpdatedProfile from "./components/Updated Profile/UpdatedProfile";
import { BMICalculator } from "./components/BMI Calculator/BMICalculator";
import { gapi } from 'gapi-script';

const Logout = React.lazy(() => import("./components/Logout/Logout"));
const Details = React.lazy(() => import("./components/Details/Details"));
const PasswordReset = React.lazy(() => import("./components/Password Reset/PasswordReset"));
const EditRecipe = React.lazy(() => import("./components/Edit Recipe/EditRecipe"));
const EditProduct = React.lazy(() => import("./components/Edit Product/EditProduct"));

const clientId = '108817696069-jff0rj5c2riujajno2jt1cg6jk9v7pfm.apps.googleusercontent.com';

function App() {

    useEffect(() => {
        function start() {
            gapi.client.init({
                    clientId: clientId,
                    scope: ''
            })
        }
        gapi.load('client:auth2', start)
    }, []);

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
                            <Route path="/updated-profile" element={<Profile />} />

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
                                        <UpdatedProfile />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/logout"
                                element={
                                    <PrivateRoute>
                                        <Suspense fallback={<Spinner />}>
                                            <Logout />
                                        </Suspense>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/details/recipes/:recipeId"
                                element={
                                    <PrivateRoute>
                                        <Suspense fallback={<Spinner />}>
                                            <Details />
                                        </Suspense>
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
                                    <Suspense fallback={<Spinner />}>
                                        <PasswordReset />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/details/edit/:recipeId"
                                element={
                                    <PrivateRoute>
                                        <Suspense fallback={<Spinner />}>
                                            <EditRecipe />
                                        </Suspense>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/details/edit/products/:productId"
                                element={
                                    <PrivateRoute>
                                        <Suspense fallback={<Spinner />}>
                                            <EditProduct />
                                        </Suspense>
                                    </PrivateRoute>
                                }
                            />

                            <Route
                                path="daily-plan-generator"
                                element={
                                    <PrivateRoute>
                                        <BMICalculator />
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
