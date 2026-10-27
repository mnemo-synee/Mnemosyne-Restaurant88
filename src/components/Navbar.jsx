import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const navLinkClass = ({ isActive })=>
        `transition-colors duration-300 ${
            isActive ? "text-yellow-300" 
            : "text-white hover:text-yellow-300"
        }`;
    return (
        <header>
            <nav className="py-4 bg-green-900">
                <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row
                items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <Link to="/" className="text-2xl font-bold text-white no-underline">
                            Mnemosyne's Restaurant
                        </Link>
                    </div>
                <ul className="flex flex-wrap justify-center gap-6 list-none">
                    <li>
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={navLinkClass}>
                         About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className={navLinkClass}>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;
