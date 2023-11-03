import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Form from "./componentes/Form";
import Grid from "./componentes/Grid";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [empresas, setEmpresas] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getEmpresas = async () => {
    try {
      const ref = await axios.get("http://localhost:8800");
      // setEmpresas(ref.data.sort((a, b) => (a.nome > b.nome ? 1 : -1))); //apenas para retornar em orderm alfabetica
      setEmpresas(ref.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getEmpresas();
  }, [setEmpresas]);

  return (
    <>
      <Container>
        <Title>Cadastro Empresas</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getEmpresas={getEmpresas} />
        <Grid
          empresas={empresas}
          setEmpresas={setEmpresas}
          setOnEdit={setOnEdit}
        />
      </Container>
      <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default App;
