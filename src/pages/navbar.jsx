import "../App.css";
import catSvg from "../assets/cat.png";

export const Navbar = () => {
    return ( 
        <nav>
            <div className="top-header">
                <img src={catSvg} className="nav-logo-img"/><i className="">FATCSSS</i>
            </div>
            <div className="links">
                <a className="uil uil-github" href="https://github.com/Meenngg" alt="My Github profile"></a>
                <a className="uil uil-link" href="https://catfact.ninja/fact" alt="Cat fact API"></a>
            </div>
        </nav>
     );
}
 
export default Navbar;
<nav>

</nav>