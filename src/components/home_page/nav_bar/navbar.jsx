import { SearchBar } from "./search_bar";
function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-div">
                    <div className="navbar-left">
                        <h1>Barter.</h1>
                    </div>
                    <div className="navbar-right">
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <button className="nav-icon">
                            <span><i className="fa-solid fa-user" style={{fontSize : "25px", padding : "5px"}}></i></span>
                        </button>
                    </div>
                    <div>
                        <button className="nav-icon">
                            <span><i className="fa-duotone fa-solid fa-gear" style={{fontSize : "25px", padding : "5px"}}></i></span>
                        </button>
                    </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
export {Navbar};