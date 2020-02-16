import React from 'react';
import PropTypes from 'prop-types';

import FieldStyled from './FieldStyled';

const Field = ({
  name,
  type,
}) => (
  <FieldStyled>

    <label
      htmlFor={name}
    >
      <input
        type={type}
        id={name}
        placeholder={name}
      />
    </label>
  </FieldStyled>
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Field;
