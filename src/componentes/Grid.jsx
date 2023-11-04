import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import TelefoneMask from "./Mascaras/TelefoneMask";
import InputMask from "react-input-mask";

const Tabela = styled.table`
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

const Input = styled(InputMask)`
  width: 300px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
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

  const [cnpjBusca, setCnpjBusca] = useState("");

  const empresasFiltradas = empresas.filter((empresa) => {
    return empresa.cnpj_empresa.includes(cnpjBusca);
  });

  const handleBuscarCnpj = async () => {
    if (!cnpjBusca) {
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8800/buscarEmpresa/${cnpjBusca}`
      );
      setEmpresas(response.data);
    } catch (error) {
      console.error("Erro na busca por CNPJ:", error);
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Pesquisar por CNPJ..."
        value={cnpjBusca}
        onChange={(e) => setCnpjBusca(e.target.value)}
      />

      <Tabela>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Nome Empresa</Th>
            <Th>CNPJ</Th>
            <Th>Telefone</Th>
            <Th>Email</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {empresasFiltradas.map((item, index) => (
            <Tr key={index}>
              <Td>{item.nome_cliente}</Td>
              <Td>{item.nome_empresa}</Td>
              <Td>{item.cnpj_empresa}</Td>
              <Td>{TelefoneMask(item.telefone)}</Td>
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
    </>
  );
};

export default Grid;
