import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center gap-3 mr-4">
            <nav className=" mr-4">
               
            <Link className="mr-4" to="/"  >Home</Link>
            <Link className="mr-4"to="/about" >About</Link>
            <Link className="mr-4"to="/contact" >Contact</Link>
            <Link className="mr-4"to="/Users" >Users</Link>
            
              
                
            </nav>
            
            
        </div>
    );
};

export default Header;