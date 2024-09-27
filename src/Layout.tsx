import Header from "./lib/Header/Header.tsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./lib/Footer/Footer.tsx";

function Layout() {
    const location = useLocation();

    const pagesWithoutFooter: string[] = ["/login", "/register", "/work"];

    return (
        <>
            <Header/>
            <main className={`main ${pagesWithoutFooter.includes(location.pathname) ? "flex-to-center" : ""}`}>
                <Outlet />
            </main>
            {!pagesWithoutFooter.includes(location.pathname) && <Footer />}
        </>
    )
}

export default Layout
