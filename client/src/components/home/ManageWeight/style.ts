import styled from 'styled-components';

export const WeightContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  width : 100%;
  padding: 10px 0 20px 0;

  p {
    font-size: 3rem;
    font-weight: 700;
    span {
      font-size: 1.5rem;
    }
  }

  svg {
    margin: 5px 0 0 10px;
    width: 20px;
    height: 20px;

    cursor: pointer;
  }

  form {
    display: contents;
    width: 100%;
    button {
      all: unset;
    }
  }

  .null-weight {
    font-size: 22px;
  }
`;

export const InputTag = styled.input`
  width: 30%;
  height: 45px;
  margin: 0;

  font-size: 20px;
  padding: 4px 8px;

  box-sizing: border-box;
  background-color: #e1e1e1;
  border-style: none;
  border-radius: 4px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const MessageContainer = styled.div`
  ${({ theme }) => theme.flexbox('column')}

  margin-top: 20px;

  span {
    font-size: 12px;
    padding: 5px 0;
  }
`;
