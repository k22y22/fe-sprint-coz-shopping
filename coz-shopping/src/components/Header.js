import React, { useState } from "react";
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { SlPresent, SlStar } from "react-icons/sl";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logoSection">
        <img className="logoImage" alt="logoImage" src="img/logo.png" />
        <h1 className="logoTitle">COZ Shopping</h1>
      </div>
      <div className="menuSection">
        <RxHamburgerMenu size="30" color="black" onClick={dropdownHandler} />
        {isOpen && (
        <div className="dropdown">
          <ul>
            <li>OOO님, 안녕하세요!</li>
            <li><SlPresent className="icon"/>상품리스트 페이지</li>
            <li><SlStar className="icon"/>북마크 페이지</li>
          </ul>
        </div>
        )}
      </div>
    </header>
  );
}

export default Header;