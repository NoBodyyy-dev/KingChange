import {Link} from "react-router-dom";
import TelegramButton from "../Buttons/TelegramButton.tsx";

const Header = () => {
    const links = [
        {name: "Как все работает", className: "work"},
        {name: "FAQ", className: "faq"},
        {name: "Правила сервиса", className: "rules"},
        {name: "Контакты", className: "contacts"}
    ]

    return (
        <header className="header">
            <div className="header__container flex-align-center-sbetw">
                <img src="/green%20dark.png" alt="" className="header-logo"/>
                <nav className="header__links">
                    <ul className="flex">
                        {links.map((link, index) => {
                            return <Link to={`/${link.className}`} key={index}>
                                <li className={link.className}>{link.name}</li>
                            </Link>
                        })}
                    </ul>
                </nav>
                <div className="header__buttons flex-align-center">
                    <div className="header__buttons-languages">
                        Русский
                    </div>
                    <TelegramButton />
                    <div className="header__buttons-login">Войти</div>
                </div>
            </div>
        </header>
    );
};

export default Header;