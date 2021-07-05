import styled from 'styled-components';

const InputSwitchLabel = styled.label`
  display: block;
  height: 8px;
  pointer-events: auto;
  position: relative;
  width: auto;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const InputSwitchSpan = styled.span`
  color: ${({ theme }) => theme.second};
  float: left;
  font-size: 11px;
  font-weight: 300;

  &:first-child {
    margin-right: 10px;
  }

  &:last-of-type {
    margin-left: 10px;
  }
`;

const InputSwitchSlider = styled.div`
  height: 8px;
  float: left;
  pointer-events: auto;
  position: relative;
  top: 3px;
  width: 20px;

  .slider {
    background-color: transparent;
    bottom: 0;
    cursor: pointer;
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
    transition: 0.250s;
    width: 100%;
  
    &:before,
    &:after {
      background-color: ${({ theme }) => theme.second};
      content: '';
      position: absolute;
    }
  
    &:before {
      border-radius: 100%;
      bottom: 0;
      height: 8px;
      left: 0;
      transition: .4s;
      width: 8px;
    }
  
    &:after {
      height: 1px;
      left: 4px;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      width: calc(100% - 8px);
    }
  }
  
  input:checked + .slider:before {
    transform: translateX(12px);
  }
`

export {
  InputSwitchLabel,
  InputSwitchSpan,
  InputSwitchSlider
}