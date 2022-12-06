import styled from 'styled-components'

export const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .album {
    border: 2px solid #000;
    padding: 20px;
    margin: 10px;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: #000;
  }
  .album:hover {
    background-color: #EEE;
  }

`