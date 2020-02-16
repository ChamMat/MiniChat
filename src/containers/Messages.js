import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = {};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

export default MessagesContainer;
