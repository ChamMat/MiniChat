export const CHANGE_MESSAGE_INPUT = 'CHANGE_MESSAGE_INPUT';
export const SEND_MESSAGE_TO_STATE = 'SEND_MESSAGE_TO_STATE';

export const changeMessageInput = (value) => ({
  type: CHANGE_MESSAGE_INPUT,
  value,
});

export const sendMessageToState = () => ({
  type: SEND_MESSAGE_TO_STATE,
});
