import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';
import Tooltip from '../Tooltip/Tooltip';
import defaultImage from '../../assets/images/photo-cover.svg';

const UserCard = (props) => {
  const {
    name, position, email, imageUrl, phone,
  } = props;

  const [tooltipText, setTooltipText] = useState('');

  const cutText = (string, length) => {
    if (string) {
      if (string.length <= length) {
        return string;
      }

      return (
        <span
          tabIndex={0}
          className="user-card__tooltip-wrapper"
          onFocus={() => setTooltipText(string)}
          onMouseOver={() => setTooltipText(string)}
          onBlur={() => setTooltipText('')}
          onMouseOut={() => setTooltipText('')}
        >
          {string.substring(0, length - 1)}
          ...
          {tooltipText === string && <Tooltip content={string} />}
        </span>
      );
    }

    return '';
  };

  return (
    <div className="user-card">
      <div className="user-card__content">
        <img src={imageUrl} alt={name} className="user-card__img" />
        <h2 className="user-card__name">{name}</h2>
        <div className="user-card__position">{position}</div>
        <div className="user-card__email">{cutText(email, 21)}</div>
        <div className="user-card__phone">{cutText(phone, 21)}</div>
      </div>
    </div>
  );
};

UserCard.defaultProps = {
  imageUrl: defaultImage,
  phone: '',
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  phone: PropTypes.string,
};

export default UserCard;
