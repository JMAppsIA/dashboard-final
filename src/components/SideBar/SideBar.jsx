import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";
import { images } from "../../constants";
import sidebarNav from "../../configs/sidebarNav";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const location = useLocation();
  const sidebarRef = useRef();
  const indicatorRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  },[])

  // Active by index
  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex(
      (item) => item.section === currentPath
    );
    setActiveIndex(currentPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const closeSidebar = () => {
    document.querySelector(".main__content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document
        .getElementsByClassName("sidebar-toggle")[0]
        .classList.remove("toggle-hidden");
      document.querySelector(".main__content").style = "";
    }, 500);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={images.logo} alt="" />
        <div className="sidebar__close" onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="sidebar__menu" ref={sidebarRef}>
        <div className="sidebar__menu__indicator" ref={indicatorRef} style={{
          transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
        }}></div>
        {sidebarNav.map((nav, index) => (
          <Link
            key={`nav-${index}`}
            to={nav.link}
            className={`sidebar__menu__item ${
              activeIndex === index && `active`
            }`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">{nav.icon}</div>
            <div className="sidebar__menu__item__label">{nav.text}</div>
          </Link>
        ))}
        <div className="sidebar__menu__item sidebar__footer">
          <div className="sidebar__menu__item__icon">
            <i className="bx bx-phone sidebar__footer__icon__color"></i>
          </div>
          <div className="sidebar__menu__item__label sidebar__footer__icon__label">
            Need Help ?
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
