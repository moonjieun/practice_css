import React, { useState } from "react";
import { styled } from "styled-components";

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    //값이 빈 string일 경우 배경색 바꾸기
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* !isValid가 false면 */}
      <FormControl>
        <FormControlLabel>목표</FormControlLabel>
        <FormControlInput
          type="text"
          onChange={goalInputChangeHandler}
          isValid={isValid}
        />
      </FormControl>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;

const FormControl = styled.div`
  margin: 0.5rem 0;
`;

const FormControlLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const FormControlInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  ${(props) => !props.isValid && `border: 1px solid red;`}
`;
