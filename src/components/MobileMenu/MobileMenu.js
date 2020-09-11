import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import React from 'react';
import './MobileMenu.scss';
import logo from '../../assets/images/logo.svg';

export const MobileMenu = ({ isOpened, onClose }) => isOpened && createPortal(
  <div className="mobile-menu">
    <div
      className="mobile-menu__bg"
      onClick={onClose}
    />
    <div className="mobile-menu__container">
      <div className="mobile-menu__logo-container">
        <img src={logo} alt="logo" className="mobile-menu__logo" />
      </div>
      <div className="mobile-menu__block">
        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            About me
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Relationships
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Users
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Sign Up
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Terms and Conditions
          </a>
        </div>
      </div>

      <div className="mobile-menu__block">
        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            How it work
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Partnership
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Help
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Leave testimonial
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Contact us
          </a>
        </div>
      </div>

      <div className="mobile-menu__block">
        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Articles
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Our news
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Testimonials
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            License
          </a>
        </div>

        <div className="mobile-menu__item">
          <a
            href="#registration"
            className="mobile-menu__link"
            onClick={onClose}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </div>, document.getElementById('modal'),
);

MobileMenu.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
