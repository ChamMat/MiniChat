import React from 'react';
import PropTypes from 'prop-types';

// Import Styles


const Message = ({ author, content }) => {
  const cssClassName = 'message';

  return (
    <div>
      <div className="author">{author}</div>
      <div className={cssClassName}>
        {content}
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
