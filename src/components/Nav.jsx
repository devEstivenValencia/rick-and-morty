import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ onSearch, showNav }) => {
  return showNav ? (
    <header>
      <nav>
        <Link to="/">
          <img id='imgTittle' className='logo' src="https://img.icons8.com/?size=512&id=udMvpkRHbzzS&format=png" alt="" />
        </Link>
        <NavLink className="menuNav">
          <Link to={"/home"}>
            <button>Home</button>
          </Link>
          <Link to={"/about"}>
            <button>About</button>
          </Link>
          <Link to={"/favorites"}>
            <button>Favorites</button>
          </Link>
        </NavLink>
        <SearchBar onSearch={onSearch} />
      </nav>
    </header>
  ) : null
}

export default Nav