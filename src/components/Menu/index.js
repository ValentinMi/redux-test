import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink activeClassName={"activeLink"} exact to={"/users"}>
        Liste des utilisateurs
      </NavLink>
      <NavLink activeClassName={"activeLink"} exact to={"/users/new"}>
        Créer un utilisateur
      </NavLink>
    </>
  );
};

export default Menu;
