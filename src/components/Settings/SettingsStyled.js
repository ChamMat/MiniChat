import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const SettingsStyled = styled.div`
  position: fixed;

  top: 3rem;
  right: 4rem;

  padding: 1rem 2rem;
  
  box-shadow: 0 0 3em rgba(0, 0, 0, .4);
  background-color: ${lighten(theme.mainColor, 60)};
  border-radius:.5rem;

  z-index:100;

  .submit {
    
    margin:.3rem auto;
    padding:.5em;
    width:100%;
    border:none;
    font-weight:700;
    text-transform:uppercase;
    background-color:lightGreen;
  }

`;

export default SettingsStyled;
