import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Tabela = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1000px;
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

const Grid = ({ empresas, setEmpresas, setOnEdit }) => {
  const editarEmpresasCadastradas = (item) => {
    setOnEdit(item);
  };

  const deletarEmpresasCadastradas = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const novoArray = empresas.filter((empresa) => empresa.id !== id);

        setEmpresas(novoArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Tabela>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          {/* <Th>Senha</Th> */}
          <Th>Nome Empresa</Th>
          <Th>CNPJ</Th>
          {/* <Th>Cep</Th> */}
          {/* <Th>Endereco</Th> */}
          {/* <Th>Numero</Th> */}
          <Th>Telefone</Th>
          <Th>Email</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {empresas.map((item, index) => (
          <Tr key={index}>
            <Td>{item.nome_cliente}</Td>
            {/* <Td>{item.senha}</Td> */}
            <Td>{item.nome_empresa}</Td>
            <Td>{item.cnpj_empresa}</Td>
            {/* <Td>{item.cep_empresa}</Td> */}
            {/* <Td>{item.endereco}</Td> */}
            {/* <Td>{item.numero}</Td> */}
            <Td>{item.telefone}</Td>
            <Td>{item.email}</Td>
            <Td width="5%">
              <FaEdit onClick={() => editarEmpresasCadastradas(item)} />
            </Td>
            <Td width="5%">
              <FaTrash onClick={() => deletarEmpresasCadastradas(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Tabela>
  );
};

export default Grid;
