# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Como Criar uma Tabela

```sql
CREATE TABLE empresas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(255) NOT NULL,
    senha VARCHAR(255),
    nome_empresa VARCHAR(255),
    cnpj_empresa VARCHAR(255),
    cep_empresa VARCHAR(255),
    endereco VARCHAR(255),
    numero VARCHAR(255),
    telefone VARCHAR(255),
    email VARCHAR(255)
    );
```

Caso Queira deletar sua tabela

```sql
DROP TABLE empresas;
```
