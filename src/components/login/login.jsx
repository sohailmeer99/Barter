import { useGlobalState  } from "../../useState";

function Login(){
    const { guest, setGuest, buttonText, updateButton, noInput, lastInput } = useGlobalState();
//    const [guest, setGuest] = useState(false);
//    const [buttonText, updateButton] = useState(false);
//    console.log("buttonText is " + buttonText);
//    const [noInput, lastInput] = useState(false);
    function guestClick(){
        buttonText ? setGuest(true) : null
    }
    // console.log()
    return(
        <div className="login_container">
        <form className = "login_form">
            <div className="login_logo">
            <h1>Barter.</h1>
            </div>
            <div className="login_inputs">
                <input placeholder="Email" />
                <input placeholder="Password" />
                {noInput && <input placeholder="Re-enter Your Password" />}
            </div>
            <div className="login_buttons">
                <button type="button" onClick={buttonText ? guestClick :null }>{buttonText ? "Continue as Guest" : "Forget Password"}</button>
                <button type="button">{buttonText ? "Register" : "Log In"}</button>
                <button type="button" onClick={()=>  {updateButton(!buttonText); lastInput(!noInput);}}>{buttonText ? "Back to Log In" : "Create an Account"}</button>
            </div>
            </form>
        </div>
    );
}
export {Login};
//just Add a Comment