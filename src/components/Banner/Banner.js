import React from 'react';
import './Banner.scss';

const Banner = () => (
  <div className="banner">
    <div className="banner__container">
      <div className="banner__details">
        <h1 className="banner__title">
          TEST ASSIGNMENT
          <br />
          {' '}
          FOR FRONTEND DEVELOPER POSITION
        </h1>
        <p className="banner__text">
          We kindly remind you that your test assignment should be submitted
          as a link to github/bitbucket repository. Please be patient, we consider
          and respond to every application that meets minimum requirements.
          We look forward to your submission. Good luck! The photo has to scale
          in the banner area on the different screens.
        </p>
        <a
          href="#registration"
          className="banner__button"
        >
          Sign up now
        </a>
      </div>
    </div>
  </div>
);
export default Banner;
