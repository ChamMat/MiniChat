import {
  CHANGE_MESSAGE_INPUT,
} from 'src/actions/app';

const initialState = {
  loading: false,
  username: 'Jean',
  // ...
  messages: [
    {
      id: 1,
      content: 'Hey salut Dora',
      author: 'Bob',
    },
    {
      id: 2,
      content: 'Hello',
      author: 'Dora',
    },
    {
      id: 3,
      content: 'La forme ?',
      author: 'Bob',
    },
  ],
  pseudo: '',
  password: '',
  inputMessage: '',
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MESSAGE_INPUT:
      return {
        ...state,
        inputMessage: action.value,
      };

    // entré dans aucune action : je retourne le state sans modif
    default:
      return state;
  }
};

export default appReducer;
