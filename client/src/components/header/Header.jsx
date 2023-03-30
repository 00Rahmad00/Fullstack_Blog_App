import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React FullStack App</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="./images/background1.jpg" alt="" />
    </div>
  );
}
