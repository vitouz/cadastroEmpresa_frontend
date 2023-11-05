# Cadastro de empresas

#Resumo do projeto
Uma aplicacao full-stack, tendo o seu Back-end construido em NodeJS e o Front-end construido em ReactJS, para banco de dados onde sera armazenado as informacoes das empresas, foi utilizado MySql.

A aplicacao permite cadastrar uma empresa e armazenar suas infomacoes fixamente num banco de dados.
Para isso, basta preencher todos os campos solicitados no formulario, assim como no exemplo abaixo: 
![image](https://github.com/vitouz/cadastroEmpresa_frontend/assets/112439603/808c1528-154b-412c-b76b-19cf20c1bcfd)
Basta clicar em salvar para gerar um novo cadastro.

Apos o cadastro, ela aparecera logo abaixo do formulario:


## Para a Construção do Back-end foi utilizado:
- 

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
