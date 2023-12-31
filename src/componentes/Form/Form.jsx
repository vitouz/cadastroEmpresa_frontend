//React
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

// API
import axios from "axios";

//Styles
import {
  FormContainer,
  InputArea,
  Input,
  StyledInputMask,
  Label,
  Button,
} from "./Form.styled.jsx";

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
