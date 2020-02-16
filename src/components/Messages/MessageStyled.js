import styled from 'styled-components';
import theme from 'src/styles/theme';

const MessageStyled = styled.div`
  
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  
  .message {
    position:relative;
    margin-bottom:1rem;
    background-color: #fff;
    display: inline-block;
    word-break: break-word;
    max-width: 60%;
    color: ${theme.mainColor};
    padding:1rem;
    border-radius:2rem;
    margin-right: 3rem;
  }

  .message::before {
    content:"";
    position:absolute;
    top:-.7rem;
    left:2rem;
    border-top:solid 15px transparent;
    border-right:solid 15px #fff;
  }

  .author {
    margin-left:2.2rem;
    margin-bottom:.7rem;
    font-weight: 700;
  }

`;

export default MessageStyled;
