import { createPortal } from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

export const ModalWindow = ({ isOpened, onClose }) => isOpened && createPortal(
  <div className="modal-window">
    <div
      className="modal-window__bg"
      onClick={onClose}
    />
    <div className="modal-window__container">
      <div className="modal-window__header">
        <h3 className="modal-window__title">
          Congratulations
        </h3>

        <button
          type="button"
          className="modal-window__close"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      <div className="modal-window__body">
        <p className="modal-window__message"> You have successful passed the registration </p>
      </div>

      <div className="modal-window__footer">
        <button
          type="button"
          className="modal-window__button"
          onClick={onClose}
        >
          Great
        </button>
      </div>
    </div>
  </div>, document.getElementById('modal'),
);

ModalWindow.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
