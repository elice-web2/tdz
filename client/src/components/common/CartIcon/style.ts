import styled from 'styled-components';

export const CartBox = styled.div`
  position: fixed;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid lightgray;
  font-size: 25px;
  text-align: center;
  box-shadow: 1px 1px lightgray;
  z-index: 999;

  span {
    display: relative;
  }
`;

export const Badge = styled.div`
  position: absolute;
  right: 8px;
  top: 12px;
  width: 15px;
  height: 15px;
  background-color: skyblue;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  line-height: 15px;
`;
