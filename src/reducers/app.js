import {
  CHANGE_MESSAGE_INPUT,
  SEND_MESSAGE_TO_STATE,
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
    {
      id: 4,
      content: 'Salut tout le monde!',
      author: 'Jean',
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

    case SEND_MESSAGE_TO_STATE:
      const messageId = Math.max(...state.messages.map((message) => message.id)) + 1;

      const newMessage = {
        id: messageId,
        content: state.inputMessage,
        author: state.username,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        inputMessage: '',
      };

    // entré dans aucune action : je retourne le state sans modif
    default:
      return state;
  }
};

export default appReducer;
