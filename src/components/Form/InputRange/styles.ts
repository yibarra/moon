import styled from 'styled-components';

const InputRangeLabel = styled.label`
  display: block;
  width: auto;

  .input-range {
    &--slider {
      appearance: none;
      background-color: transparent;
      height: 10px;
      float: left;
      opacity: 1;
      position: relative;
      transition: opacity .2s;
      width: 80px;
  
      &:before,
      &:after {
        background-color: ${({ theme }) => theme.second};
        content: '';
        position: absolute;
      }
  
      &:after {
        height: 1px;
        left: 4px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: 100%;
      }
  
      &::-webkit-slider-thumb {
        appearance: none;
        background: ${({ theme }) => theme.second};
        border-radius: 100%;
        cursor: pointer;
        height: 8px;
        width: 8px;
      }
    }
  }
`;

const InputRangeSpan = styled.span`
  color: ${({ theme }) => theme.second};
  float: left;
  font-size: 11px;
  font-weight: 300;
  margin: 0 10px 0 0;
  width: auto;
`;

export {
  InputRangeLabel,
  InputRangeSpan
}