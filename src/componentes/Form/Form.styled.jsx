import styled from "styled-components";
import InputMask from "react-input-mask";

export const FormContainer = styled.form`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 300px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

export const StyledInputMask = styled(InputMask)`
  width: 300px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;
export const Label = styled.label``;

export const Button = styled.button`
  display: block;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  height: 42px;
`;
