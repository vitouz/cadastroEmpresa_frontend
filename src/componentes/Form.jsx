import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

// STYLES *******************************
const FormContainer = styled.form`
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

const Input = styled.input`
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
const Label = styled.label``;

const Button = styled.button`
  display: block;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  height: 42px;
`;

//STYLES ******************

const Form = ({ getEmpresas, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const empresa = ref.current;

      empresa.nome_cliente.value = onEdit.nome_cliente;
      empresa.senha.value = onEdit.senha;
      empresa.nome_empresa.value = onEdit.nome_empresa;
      empresa.cnpj_empresa.value = onEdit.cnpj_empresa;
      empresa.cep_empresa.value = onEdit.cep_empresa;
      empresa.endereco.value = onEdit.endereco;
      empresa.numero.value = onEdit.numero;
      empresa.telefone.value = onEdit.telefone;
      empresa.email.value = onEdit.email;
    }
  }, [onEdit]);

  const enviarSubmit = async (e) => {
    e.preventDefault();

    const empresa = ref.current;
    if (
      !empresa.nome_cliente.value ||
      !empresa.senha.value ||
      !empresa.nome_empresa.value ||
      !empresa.cnpj_empresa.value ||
      !empresa.cep_empresa.value ||
      !empresa.endereco.value ||
      !empresa.numero.value ||
      !empresa.telefone.value ||
      !empresa.email.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome_cliente: empresa.nome_cliente.value,
          senha: empresa.senha.value,
          nome_empresa: empresa.nome_empresa.value,
          cnpj_empresa: empresa.cnpj_empresa.value,
          cep_empresa: empresa.cep_empresa.value,
          endereco: empresa.endereco.value,
          numero: empresa.numero.value,
          telefone: empresa.telefone.value,
          email: empresa.email.value,
        })
        .then(({ data }) => {
          toast.success(data);
          // window.location.reload(false);
        })
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome_cliente: empresa.nome_cliente.value,
          senha: empresa.senha.value,
          nome_empresa: empresa.nome_empresa.value,
          cnpj_empresa: empresa.cnpj_empresa.value,
          cep_empresa: empresa.cep_empresa.value,
          endereco: empresa.endereco.value,
          numero: empresa.numero.value,
          telefone: empresa.telefone.value,
          email: empresa.email.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    setOnEdit(null);
    getEmpresas();
    console.log(empresa.cnpj_empresa.value);
  };

  return (
    <>
      <FormContainer ref={ref} onSubmit={enviarSubmit}>
        <InputArea>
          <Label>Nome</Label>
          <Input name="nome_cliente" />
        </InputArea>
        <InputArea>
          <Label>Senha</Label>
          <Input name="senha" />
        </InputArea>
        <InputArea>
          <Label>Nome Empresa</Label>
          <Input name="nome_empresa" />
        </InputArea>
        <InputArea>
          <Label>CNPJ</Label>
          <StyledInputMask mask="99.999.999/9999-99" name="cnpj_empresa" />
        </InputArea>
        <InputArea>
          <Label>CEP</Label>
          <StyledInputMask mask="99999-999" name="cep_empresa" />
        </InputArea>
        <InputArea>
          <Label>Endereco</Label>
          <Input name="endereco" />
        </InputArea>
        <InputArea>
          <Label>Numero</Label>
          <Input name="numero" />
        </InputArea>
        <InputArea>
          <Label>Telefone</Label>
          <StyledInputMask mask="(99) 99999-9999" name="telefone" />
        </InputArea>
        <InputArea>
          <Label>Email</Label>
          <Input name="email" />
        </InputArea>
        <Button type="submit">Salvar</Button>
      </FormContainer>
    </>
  );
};

export default Form;
