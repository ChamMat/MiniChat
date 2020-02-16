// == Import npm
import React from 'react';

// == Import components
import Settings from 'src/components/Settings';
import Messages from 'src/containers/Messages';
import UserInput from 'src/containers/UserInput';

// Import Style
import GlobalStyle from 'src/styles/GlobalStyles';
import AppStyled from './AppStyled';


// == Composant
const App = () => (
  <AppStyled className="app">
    <GlobalStyle />
    <Settings />
    <Messages />
    <UserInput />
  </AppStyled>
);

// == Export
export default App;
