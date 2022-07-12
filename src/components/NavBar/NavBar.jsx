import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import "./nav-bar.scss";
import { data } from "../../constants";

const NavBar = () => {
  const openSidebar = () => {
    document.body.classList.add('sidebar-open')
    document.getElementsByClassName('sidebar-toggle')[0].classList.add('toggle-hidden')
  }

  return (
    <div className="navbar">
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
      <div className="navbar__items">
        <div className="navbar__items__icon">
          <i className='bx bx-bell'></i>
        </div>
        <div className="navbar__items__icon">
          <i className='bx bx-cloud'></i>
        </div>
        <UserInfo user={data.user} />
      </div>
    </div>
  );
};

export default NavBar;
