// React
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

// Styles
import { Tabela, Thead, Tr, Th, Tbody, Td, Input } from "./Grid.styled";

// API
import axios from "axios";

// Masks
import TelefoneMask from "../Mascaras/TelefoneMask";

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
