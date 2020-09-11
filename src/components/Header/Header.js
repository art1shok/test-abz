import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/menu icon.svg';
import { MobileMenu } from '../MobileMenu/MobileMenu';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="page-header">
      <div className="page-header__container">
        <div className="page-header__logo-container">
          <img
            className="page-header__logo"
            src={logo}
            alt="logo"
          />
        </div>

        <nav className="page-header__nav-wrapper">
          <ul className="page-header__nav">
            <li className="page-header__nav-item">
              <a className="page-header__nav-link" href="#registration">About me</a>
            </li>

            <li className="page-header__nav-item">
              <a className="page-header__nav-link" href="#registration">Relationships</a>
            </li>

            <li className="page-header__nav-item">
              <a className="page-header__nav-link" href="#registration">Requirements</a>
            </li>

            <li className="page-header__nav-item">
              <a className="page-header__nav-link" href="#registration">Users</a>
            </li>

            <li className="page-header__nav-item">
              <a className="page-header__nav-link" href="#registration">Sign Up</a>
            </li>
          </ul>
        </nav>
        <div
          className="page-header__menu-link"
          onClick={() => setIsOpened(true)}
        >
          <img
            className="page-header__menu"
            src={menu}
            alt="menu"
          />
        </div>
        <MobileMenu
          isOpened={isOpened}
          onClose={() => setIsOpened(false)}
        />
      </div>
    </header>
  );
};

export default Header;
