import styled from 'styled-components';

const MainSection = styled.section`
  float: left;
  height: 100vh;
  position: relative;
  width: 100vw;

  .stage,
  .konvajs-content {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export {
  MainSection
}