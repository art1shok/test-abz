import React, { useState, useRef } from 'react';
import './Registration.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectPositionData } from '../../store/selectors';
import { loadPositions, createUser } from '../../store/actions';
import { useOnMount } from '../../hooks/useOnMount';
import { ModalWindow } from '../ModalWindow/ModalWindow';

const KB = 1024;
const MB = KB * KB;

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: '',
  });

  const [fileData, setFileData] = useState('');
  const fileRef = useRef();

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    position_id: '',
    phone: '',
    photo: '',
  });
  const [isOpened, setIsOpened] = useState(false);

  const data = useSelector(selectPositionData);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useOnMount(() => {
    dispatch(loadPositions());
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (event) => {
    const banText = parseFloat(event.key);

    if (Number.isNaN(banText) && event.key !== '+') {
      event.preventDefault();
    }
  };

  const returnFileSize = (number) => {
    if (number < KB) {
      return `${number}bytes`;
    }
    if (number > KB && number < MB) {
      return `${(number / KB).toFixed(1)}KB`;
    }
    return `${(number / MB).toFixed(1)}MB`;
  };

  const getImgResolution = (file, callback) => {
    const img = new Image();
    const objUrl = window.URL.createObjectURL(file);
    const width = 0;
    const height = 0;

    img.onload = () => {
      // eslint-disable-next-line react/no-this-in-sfc
      callback(this.width, this.height);
    };

    img.src = objUrl;

    return { width, height };
  };

  const handleChangeFile = async (e) => {
    if (fileRef.current && fileRef.current.files[0]) {
      const { files } = fileRef.current;
      const { value } = e.target;

      getImgResolution(files[0], (width, height) => {
        if (width > 70 && height > 70 && files[0].size <= 5 * MB) {
          setErrors({ ...errors, photo: '' });
          setFileData(
            `${value}, ${width}x${height}px ${returnFileSize(files[0].size)}`,
          );
        } else {
          fileRef.current.value = '';
          setFileData('');
          setErrors({
            photo: 'Photo must be minimum 70x70 and have max size 5MB',
          });
        }
      });
    }
  };

  const handleClearError = (e) => {
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const submitValidation = () => {
    if (formData.name.trim() === '') {
      setErrors((prevState) => ({
        ...prevState,
        name: 'The name field is required.',
      }));
    } else if (formData.name.length < 2) {
      setErrors((prevState) => ({
        ...prevState,
        name: 'The name must be at least 2 characters.',
      }));
    }

    if (formData.email === '') {
      setErrors((prevState) => ({
        ...prevState,
        email: 'The email field is required.',
      }));
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email.trim())
    ) {
      setErrors((prevState) => ({
        ...prevState,
        email:
          'Here must be a valid email address in format name@service.domain',
      }));
    }

    if (formData.phone === '') {
      setErrors((prevState) => ({
        ...prevState,
        phone: 'The phone field is required.',
      }));
    } else if (!/^\+380[1-9]+[0-9]{8}$/i.test(formData.phone.trim())) {
      setErrors((prevState) => ({
        ...prevState,
        phone: 'Here must be a valid phone number (+380 XX XXX XX XX)',
      }));
    }

    if (formData.position_id === '') {
      setErrors((prevState) => ({
        ...prevState,
        position_id: 'You have to choose position',
      }));
    }

    if (fileData.trim() === '') {
      setErrors((prevState) => ({
        ...prevState,
        photo: 'The photo is required',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitValidation();

    setErrors((prevState) => {
      if (Object.values(prevState).every((error) => error === '')) {
        dispatch(
          createUser({
            position_id: formData.position_id,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            photo: fileRef.current.files[0],
          }, () => setIsOpened(true)),
        );
      }
      return prevState;
    });
  };

  return (
    <div className="registration" id="registration">
      <div className="registration__container">
        <h1 className="registration__title">Register to get a work</h1>
        <div className="registration__form-container">
          <p className="registration__text">
            Attention! After successful registration and alert, update the list
            of users in the block from the top.
          </p>
          <form className="registration__form" onSubmit={handleSubmit}>
            <div className="registration__input-container">
              <label className="registration__label" htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Your name"
                  onChange={handleChange}
                  onFocus={handleClearError}
                  maxLength={60}
                  className="registration__input-field"
                />
                <p className="registration__error-message">{errors.name}</p>
              </label>
            </div>
            <div className="registration__input-container">
              <label className="registration__label" htmlFor="email">
                Email
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your email"
                  onChange={handleChange}
                  onFocus={handleClearError}
                  className="registration__input-field"
                />
                <p className="registration__error-message">{errors.email}</p>
              </label>
            </div>
            <div className="registration__input-container">
              <label className="registration__label" htmlFor="phone">
                Phone number
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handleClearError}
                  onKeyPress={handleKeyPress}
                  maxLength={13}
                  placeholder="+380 XX XXX XX XX"
                  className="registration__input-field"
                />
                {!errors.phone ? (
                  <p className="registration__tooltip">
                    Enter phone number in open format
                  </p>
                ) : (
                  <p className="registration__error-message">{errors.phone}</p>
                )}
              </label>
            </div>

            <div className="registration__radio-container">
              <p className="registration__radio-title">Select your position</p>
              {data
                && data.positions.map((position) => (
                  <label
                    className="registration__radio-label"
                    htmlFor={position.id}
                    key={position.id}
                  >
                    <input
                      type="radio"
                      name="position_id"
                      id={position.id}
                      value={`${position.id}`}
                      checked={formData.position_id === `${position.id}`}
                      onChange={handleChange}
                      onFocus={handleClearError}
                      className="registration__radio-button"
                    />
                    <span className="registration__checkmark" />
                    {position.name}
                  </label>
                ))}
              <p className="registration__error-message">
                {errors.position_id}
              </p>
            </div>

            <div className="registration__file-container">
              <input
                id="fileInput"
                type="file"
                name="file"
                ref={fileRef}
                onChange={handleChangeFile}
                accept=".jpg, .jpeg"
                className="registration__file-input"
              />

              <label htmlFor="fileInput" className="registration__file-label">
                Photo
                <div className="registration__custom-input">
                  <p className="registration__file-text">
                    {fileData || (
                      <span className="registration__file-placeholder">
                        Upload your photo
                      </span>
                    )}
                  </p>

                  <div className="registration__file-button">Browse</div>
                </div>
                <p className="registration__error-message">{errors.photo}</p>
              </label>
            </div>

            <button
              className="registration__button"
              type="submit"
              disabled={isLoading}
            >
              Sign up now
            </button>
          </form>
        </div>
      </div>
      <ModalWindow isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </div>
  );
};

export default Registration;
