import React from 'react';
import PropTypes from 'prop-types';

// Import Styles


const Message = ({ author, content, userName }) => {
  let cssClassName = 'message';
  let cssClassAuthor = 'author';

  if (userName === author) {
    cssClassName += ' ownMessage';
    cssClassAuthor += ' myName';
  }

  return (
    <div>
      <div className={cssClassAuthor}>{author}</div>
      <div className={cssClassName}>
        {content}
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Message;
