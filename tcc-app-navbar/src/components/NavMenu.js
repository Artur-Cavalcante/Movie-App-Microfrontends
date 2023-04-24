import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Input,
} from 'reactstrap';

import {
  FaFilm,
  FaSearch,
  FaStar,
} from 'react-icons/fa';

import {
  FcFilmReel
} from 'react-icons/fc';

import '../styles/NavMenu.css';

function NavMenu(props) {
  const [collapsed, setCollapsed] = useState(true);
  const [inputText, setInputText] = useState("");
  const [route, setRoute] = useState("");

  let FilmLogo = <FcFilmReel size="2.4rem"  />;
  let FavoriteIcon = <FaStar size={19} style={{marginRight:2, marginBottom:2, color: 'var(--color-star)'}}/>;
  let FilmsLogo = <FaFilm size={19} style={{marginRight:2, color: 'var(--color-navbar-icon-movies)'}} /> 
  let SearchIcon = <FaSearch size={19} />;

  function toggleNavbar() {
    setCollapsed(!collapsed);
  };

  function redirectToSearch(){
    setRoute(<Redirect push to={"/search?searchText=" + inputText}  />)
  }

  function handleEnterKey(event){
    if(event.key === 'Enter'){
      redirectToSearch()
    };
  }

  return (
    <header>
      <Navbar
        style={{ backgroundColor: "var(--color-primary)" }}
        className="navbar-expand-lg  mb-3 shadow"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
              {FilmLogo}
              <span className="logo-name">Movies</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse
            className="flex-sm-row-reverse"
            isOpen={!collapsed}
            navbar
          >
            <ul className="navbar-nav ">
              <div className="mr-3 mt-2">
                <div style={{ display: "inline-block", width:"90%" }}>
                  <Input 
                    placeholder="Search Movie" 
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                    onKeyPress={handleEnterKey}
                  />
                </div>
                <NavLink 
                  to={"/search?searchText=" + inputText}
                  onClick={redirectToSearch}
                  className="text-dark" 
                  style={{ display: "inline-block", width:"5%", paddingLeft:7 }} 
                  tag={Link} 
                >
                  {SearchIcon}
                </NavLink>
              </div>
              <NavLink tag={Link} className="text-dark mr-3 mt-2" to="/">
                {FilmsLogo}
                <span>
                  Movies
                </span>
              </NavLink>
              <NavLink tag={Link} className="text-dark mt-2" to="/favorites">
                {FavoriteIcon}
                <span>
                  Favorites
                </span>
              </NavLink>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
      {route}
    </header>
  );
};

export default NavMenu;