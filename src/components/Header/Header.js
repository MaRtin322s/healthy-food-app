import "./styles/header.css";
import "./styles/responsive.css";
import logo from "./images/logo.png";
import backgrond from "./images/backgr.jpg";

const Header = () => {
    return (
        <header className="navigation">
            <nav>
                {/* eslint-disable-next-line */}
                <ul className="nav-bar" role={"list"}>
                    <li className="nav-bar-logo">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/catalog">Recipes Calatog</a>
                    </li>
                    <li className="nav-item">
                        <a href="/create">Create Recipe</a>
                    </li>
                    <li className="nav-item">
                        <a href="/profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="/logout">Logout</a>
                    </li>
                    <li className="nav-item">
                        <a href="/login">Log In</a>
                    </li>
                    <li className="nav-item">
                        <a href="/register">Sign Up</a>
                    </li>
                </ul>
            </nav>
            <img className="background-img" src={backgrond} alt="background" />
            <article className="heading-info">
                <h1 className="heading">Your favourite food - Delivered hot &amp; fresh</h1>
                <p className="heading-para">
                    Healthy switcher chefs do all the prep work like peeling, chopping &amp;
                    marinating, so you can cook a fresh food.
                </p>
                <a className="heading-link" href="/">
                    Recipes Catalog
                </a>
                <div className="header-empty" />
            </article>
        </header>
    );
}

export default Header;