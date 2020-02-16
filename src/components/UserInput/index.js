import React from 'react';
import PropTypes from 'prop-types';

// import Style
import UserInputStyled from './UserInputStyled';

const UserInput = ({ inputValue, changeInputValue, sendMessage }) => {
  const handleChange = (evt) => {
    changeInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendMessage();
  };

  return (
    <UserInputStyled>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
    </UserInputStyled>
  );
};

UserInput.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default UserInput;
