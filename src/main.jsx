import {StrictMode} from "react"
import reactDom from "react-dom/client"
import App from "./App.jsx"
reactDom.createRoot(document.getElementById("root")).render(
    <StrictMode>
    <App />
    </StrictMode>
);