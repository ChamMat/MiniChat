import React from 'react';
import PropTypes from 'prop-types';

// import Style
import UserInputStyled from './UserInputStyled';

const UserInput = ({ inputValue, changeInputValue }) => {
  const handleChange = (evt) => {
    changeInputValue(evt.target.value);
  };

  return (
    <UserInputStyled>
      <form>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
    </UserInputStyled>
  );
};

UserInput.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default UserInput;
