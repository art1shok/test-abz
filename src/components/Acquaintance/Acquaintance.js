import React from 'react';
import manLaptop from '../../assets/images/man-laptop-v1.svg';
import './Acquaintance.scss';

const Acquaintance = () => (
  <div className="acquainted">
    <h1 className="acquainted__main-title">
      Let&#39;s get acquainted
    </h1>
    <div className="acquainted__wrapper">
      <div className="acquainted__img-wrapper">
        <img
          className="acquainted__img"
          src={manLaptop}
          alt="man with laptop"
        />
      </div>
      <div className="acquainted__content">
        <h3 className="acquainted__title">
          I am cool frontend developer
        </h3>
        <p className="acquainted__text">
          We will evaluate now clean your approach to writing CSS and Javascript
          code is. You can use any CSS and Javascript 3rd party libraries without any restriction.
          <br />
          <br />
          If 3rd party css/javascript libraries are added to the project via
          bower/npm/yarn you will get bonus points. If you use any task runner
          (gulp/webpack) you will get bonus points as well. Slice service directory
          page PSD mockup into HTML5/CSS3.
        </p>
        <a
          href="#registration"
          className="acquainted__link"
        >
          Sign up now
        </a>
      </div>
    </div>
  </div>
);

export default Acquaintance;
