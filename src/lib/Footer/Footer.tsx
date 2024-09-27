import {Link} from "react-router-dom";
import TelegramButton from "../Buttons/TelegramButton.tsx";

const Footer = () => {
    const links = [
        {name: "FAQ", className: "faq"},
        {name: "Правила сервиса", className: "rules"},
        {name: "AML Policy", className: "policy"},
        {name: "Как все работает", className: "work"},
        {name: "Контакты", className: "contacts"},
        {name: "API", className: "api"}
    ]

    return (
        <footer className="footer">
            <div className="footer__container flex-align-center-sbetw">
                <img src="/logo.svg" alt="KingChange" className="header-logo"/>
                <nav className="footer__links">
                    <ul className="flex">
                        {links.map((link, index) => {
                            return <Link to={`/${link.className}`} key={index}>
                                <li className={link.className}>{link.name}</li>
                            </Link>
                        })}
                    </ul>
                </nav>
                <div className="header__buttons flex-align-center">
                    <div className="change__languages">
                        <div className="change__languages-head">Русский</div>
                    </div>
                    <Link to="https://t.me/KingChange_bot"><TelegramButton className="p-left"/></Link>
                    <button className="button-enter p-left">Войти</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;