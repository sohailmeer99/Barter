function SearchBar(){
    return(
        <div style={{display:"flex"}}>
            <input style={{paddingLeft:"10px", fontSize: "1.5rem", color:"#3D3D3D"}} className="nav-searchbar"/><span><i className="fas fa-search" style={{fontSize : "25px", padding : "5px"}}></i></span>
        </div>
    )
}
export {SearchBar};