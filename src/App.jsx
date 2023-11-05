// React
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

// Styles
import { Container, Title } from "./App.styled.jsx";

//Corpo da Aplicacao
import Form from "./componentes/Form/Form";
import Grid from "./componentes/Grid/Grid";

// API
import axios from "axios";

function App() {
  const [empresas, setEmpresas] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getEmpresas = async () => {
    try {
      const ref = await axios.get("http://localhost:8800");
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
