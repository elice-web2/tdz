import styled, { css } from 'styled-components';

export const MyGoalWrapper = styled.div`
  position: relative;

  height: 570px;
  padding: 0 35px;
  
  text-align: center;
`
export const Button = styled.input`

  width: 220px;
  height: 30px;
  
  background-color: black;
  border-radius: 8px;
  border-style: none;
  
  color: white;
  font-style:none;

  cursor: pointer;
`
export const Mode = styled.div`
  width: 50%; 
  height: 100px;
  
  background-color: lightgrey;
  border-style: none;
  border-radius: 20px;

  font-size: 16px;
  font-weight: 700;
  line-height: 100px; 

  cursor: pointer;

  & + & {
    margin-left: 20px;
  }

`

export const FlexContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items : center;

  width:100%;
  margin: 10px auto;

  font-size: 14px;
  font-weight: 600;
  
  &.mode {
    margin-top: 30px;
  }
  .percentile {
    position: absolute;
    right: 46%;
  }
  &.fastNutrient{
    margin-bottom: 30px;
  }
`
export const CircleContainer = styled.div`
  display:flex;
  align-items: center;

  margin : 20px 0;
`
export const StepCircle = styled.div<{active ?: boolean}>`
  width:${props => props.active ? "40px":"30px"};
  height:${props => props.active ? "40px":"30px"};
  
  margin-right: 10px;

  background-color: ${props => props.active ? "grey":"lightgrey"};
  border-radius: 50%;
`
export const Activity = styled.div`
  font-size: 12px;
  font-weight: 400;

  cursor: pointer;
  
  .emoji {
    display: block;
    
    width: 50px;
    height: 50px;
    margin: 7px auto;

    background-color: lightgray;
    border-radius: 50%;
  }
`

export const Title = styled.div<{align ?: string;}>`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 700;
  text-align: ${props => props.align === "end" ? "end" : "start"};

  &.subTitle {
    font-size: 16px;
    font-weight: 500;
  }
  &.subCalorie {
    font-weight:400;
    text-align: center;
   
  }
  &.subCalorie:last-of-type {
    margin-bottom: 100px;
  }
  
  &.calorie {
    font-size: 40px;
    text-align: center;
  }
`
export const Step = styled.div`
  margin: 10px 0;

  font-size: 12px;
  font-weight: 600;
  text-align:start;
`

export const InputTag = styled.input<{widthSize : string}>`
  ${({widthSize}) => {
    if (widthSize === "large") {
      return css`
        width: 100%;
        height: 45px;
        margin: 0 0 80px 0;

        font-size : 20px;
        `
    } else if (widthSize === "medium") {
      return css`
        width: 40%;
        height: 45px;
        margin: 0;

        font-size : 20px;
        text-align: end;
        `
    } else if (widthSize === "small") {
      return css`
        width: 60%;
        height: 25px;

        font-size : 12px;
      `
    }
  }}
  padding: 4px 8px;

  box-sizing: border-box;
  background-color: #E1E1E1;
  border-style: none;
  border-radius: 4px;
`