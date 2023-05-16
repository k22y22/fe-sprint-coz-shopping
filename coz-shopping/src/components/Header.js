import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img className="logoImage" alt="logoImage" src="img/logo.png" />
        </Link>
        <h1 className="logoTitle">COZ Shopping</h1>
      </div>
      <div className="menuSection">
        <RxHamburgerMenu size="30" color="black" onClick={dropdownHandler} />
        {isOpen && (
        <div className="dropdown">
          <ul>
            <li>OOO님, 안녕하세요!</li>
            <li>
              <Link to="/productlist">
                <SlPresent className="icon"/> 상품리스트 페이지
              </Link>
            </li>
            <li>
              <Link to='/bookmark'>
                <SlStar className="icon"/> 북마크 페이지
              </Link>
            </li>
          </ul>
        </div>
        )}
      </div>
    </header>
  );
}

export default Header;