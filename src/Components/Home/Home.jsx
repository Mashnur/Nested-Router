import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header ></Header>
            <h2 className="bg-orange-500">This is home component </h2>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;