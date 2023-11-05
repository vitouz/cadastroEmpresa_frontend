import InputMask from "react-input-mask";
import styled from "styled-components";

export const Tabela = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 100%;
  margin: 20px auto;
`;

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding-top: 15px;
`;

export const Input = styled(InputMask)`
  width: 300px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;
