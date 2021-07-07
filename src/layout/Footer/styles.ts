import styled from 'styled-components';

const FooterFooter = styled.footer`
  bottom: 0;
  left: 0;
  padding: 10px 5px;
  position: fixed;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }: any) => theme.second};
    font-family: 'Roboto Condensed';
    font-size: 10px;
    font-weight: 300;
    float: right;
  }
`;

export {
  FooterFooter
}