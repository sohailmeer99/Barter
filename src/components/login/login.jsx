import react from "react"
function Login(){
    return(
        <div className="login_container">
        
        <form className = "login_form">
            <div className="login_img">
                <img src="https://media.baamboozle.com/uploads/images/960138/1677600448_50792.jpeg" />
            </div>
            <div className="login_inputs">
                <input />
                <input />
            </div>
            <div className="login_buttons">
                <button>Forget Password</button>
                <button>Login</button>
                <button>Create an Account</button>
            </div>
            </form>
        </div>
        
    );
}
export {Login};
//just Add a Comment