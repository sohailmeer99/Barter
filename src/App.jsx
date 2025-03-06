import { Login } from "./components/login/login.jsx";
import Homepage from "./components/home_page/Homepage.jsx";
import { useState } from "react";

function App(){
    const user = false;
    return(
        user? <Homepage />  : <Login />
    );
}
export default App;
