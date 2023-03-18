import "./styles/header.css";
import logo from "./images/logo.png";
import backgrond from "./images/backgr.jpg";

const Header = () => {
    return (
        <header className="navigation">
            <nav>
                <ul className="nav-bar" role="list">
                    <li className="nav-bar-logo">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Recipes Calatog</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Create Recipe</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Logout</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Log In</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Sign Up</a>
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