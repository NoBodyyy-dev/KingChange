import ReactDOM from "react-dom/client";
import {MainRouterProvider} from "./router/Router";
import "./styles/index.scss";
import {store} from "./store/store";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById("app")!).render(
    <Provider store={store}>
        <MainRouterProvider/>
    </Provider>
);