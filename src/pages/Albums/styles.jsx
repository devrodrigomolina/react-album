import styled from 'styled-components'

export const AlbumsContainer = styled.div`
  width: 95vw;
  margin: 20px auto;
`


export const ImageContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  cursor: pointer;
  margin: 10px;
  display: inline-block;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #EEE;
  }
  img {
    width: 200px;
    height: 200px;
  }
`