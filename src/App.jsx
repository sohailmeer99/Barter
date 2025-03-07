import {GlobalStateProvider, useGlobalState} from "./useState.jsx"
import { Login } from "./components/login/login.jsx";
import Homepage from "./components/home_page/Homepage.jsx";

function App(){
    const { guest } = useGlobalState(); // Access guest state

    return(
        guest ? <Homepage />  : <Login />
    );
}
export default App;
