import { useState } from "react";

function Login(){
   const [buttonText, updateButton] = useState(false);
   const [noInput, lastInput] = useState(false);
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
                <button type="button">{buttonText ? "Forget Password" : "Forget Password"}</button>
                <button type="button">{buttonText ? "Register" : "Log In"}</button>
                <button type="button" onClick={()=>  {updateButton(!buttonText); lastInput(!noInput);}}>{buttonText ? "Back to Log In" : "Create an Account"}</button>
            </div>
            </form>
        </div>
    );
}
export {Login};
//just Add a Comment