import "./styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <h1 className="footer_heading">NutriGit</h1>
            <ul role="list">
                <li>About us</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Contacts</li>
            </ul>
            <ul role="list">
                <li>Follow us on</li>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://github.com/MaRtin322s"
                        target="_blank"
                    >
                        <i className="fab fa-github-square" />
                    </a>
                </li>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://www.facebook.com/profile.php?id=100009733451214"
                        target="_blank"
                    >
                        <i className="fab fa-facebook-square" />
                    </a>
                </li>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://www.instagram.com/martin13s18/"
                        target="_blank"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;