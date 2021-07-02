import React from "react";
import "./Header.css";
import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from "@material-ui/icons";
import HeaderOptions from "./HeaderOptions";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="Me"/>
      </div>
    </div>
  );
}

export default Header;
