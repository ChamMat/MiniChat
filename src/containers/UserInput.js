import { connect } from 'react-redux';

import UserInput from 'src/components/UserInput';
import { changeMessageInput } from 'src/actions/app';


const mapStateToProps = (state) => ({
  inputValue: state.inputMessage,

});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => {
    dispatch(changeMessageInput(value));
  },
});

const UserInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInput);

export default UserInputContainer;
