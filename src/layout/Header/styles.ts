import styled from 'styled-components';

const HeaderDateDiv = styled.div`
  bottom: 10px;
  left: 50%;
  position: fixed;
  transform: translate(-50%, 0);
  z-index: 2;

  .react-datepicker {
    background-color: ${({ theme }: any) => theme.second};
    border: none;
    border-radius: 0px;

    &__input-container {
      border: none;
      border-bottom: 1px solid;
      border-color: ${({ theme }: any) => theme.second};

      input {
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${({ theme }: any) => theme.second};
        font-size: 10px;
        font-family: 'Roboto Condensed', 'sans-serif';
        outline: none;
        text-align: center;
      }
    }

    &__current-month {
      color: ${({ theme }: any) => theme.main};
      font-size: 14px;
      font-family: 'Roboto Condensed', 'sans-serif';
      font-weight: 400;
    } 

    &__day {
      font-size: 10px;
      font-family: 'Roboto Condensed', 'sans-serif';
      color: ${({ theme }: any) => theme.main};
    }

    &__day-names {
      font-size: 10px;
      font-family: 'Roboto Condensed', 'sans-serif';
    }
    
    &__day-name,
    &__time-name {
      color: ${({ theme }: any) => theme.main};
      font-size: 10px;
    }

    &__header {
      background-color: transparent;
      border-bottom: 1px solid ${({ theme }: any) => theme.main};
    }

    &__month-container {
      background-color: transparent;
    }

    &-popper {
      transform: translate(-50%, -20px) !important;
      left: 50% !important;
    }

    &__tab-loop {
      left: 50%;
      position: absolute;
      transform: translate(-50%, 0);
      top: 0;
      width: 100%;
    }

    &__triangle {
      display: none;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range {
      background-color: ${({ theme }: any) => theme.main};
      border-radius: 0;
      color: ${({ theme }: any) => theme.second};
      font-weight: normal;
    }

    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover,
    .react-datepicker__year-text:hover {
      background-color: ${({ theme }: any) => theme.main};
      border-radius: 0;
      color: ${({ theme }: any) => theme.second};
    }

    .react-datepicker__navigation-icon::before,
    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-year-read-view--down-arrow {
      border-color: ${({ theme }: any) => theme.main};
      border-width: 1px 1px 0 0;
      height: 7px;
      width: 7px;
    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected {
      background-color: transparent;
      color: ${({ theme }: any) => theme.main};

      &:before {
        background-color: transparent;
        border: 1px solid ${({ theme }: any) => theme.main};
        content: '';
        height: calc(100% - 2px);
        left: -1px;
        opacity: 0.9;
        position: absolute;
        top: 0;
        width: calc(100% - 1px);
      }
    }

    .react-datepicker__day--outside-month {
      opacity: 0.4;
    }
  }
`;

const HeaderHeader = styled.header`
  background-color: transparent;
  left: 0;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 22;

  .filter {
    float: left;
    width: 50%;

    &--date {
      left: 50%;
      position: absolute;
      top: 10px;
      transform: translate(-50%, 0);
    }

    &--item {
      float: left;
      margin: 0 0 10px;
      width: 100%;

      &.slider {
        > label {
          float: right;
        }
      }
    }

    .input-range {
      float: right;
    }
  }
`;

const HeaderMoonDiv = styled.div`
  left: 50%;
  position: absolute;
  transform: translate(-50%, 0);
  top: 0;

  .title {
    color: ${({ theme }) => theme.second};
    font-family: Roboto Slab;
    font-size: 10px;
    margin: 10px 0;
    text-transform: uppercase;
  }
`;

export {
  HeaderDateDiv,
  HeaderHeader,
  HeaderMoonDiv
}