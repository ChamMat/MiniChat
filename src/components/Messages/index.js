import React from 'react';
import PropTypes from 'prop-types';

// import components
import Message from 'src/components/Messages/Message';
import MessageStyled from './MessageStyled';

const Messages = ({ messages }) => (
  <MessageStyled>
    {messages.map((message) => (
      <Message key={message.id} {...message} />
    ))}
  </MessageStyled>

);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
