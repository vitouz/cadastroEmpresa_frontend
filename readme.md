# Cadastro de empresas

## Resumo do projeto
Uma aplicacao full-stack, tendo o seu Back-end construido em NodeJS e o Front-end construido em ReactJS, para banco de dados onde sera armazenado as informacoes das empresas, foi utilizado MySql.

A aplicacao permite cadastrar uma empresa e armazenar suas infomacoes fixamente num banco de dados.
Para isso, basta preencher todos os campos solicitados no formulario, assim como no exemplo abaixo: 
![image](https://github.com/vitouz/cadastroEmpresa_frontend/assets/112439603/808c1528-154b-412c-b76b-19cf20c1bcfd)
Basta clicar em salvar para gerar um novo cadastro.

Apos o cadastro, ela aparecera logo abaixo do formulario:
![image](https://github.com/vitouz/cadastroEmpresa_frontend/assets/112439603/a191e9ae-26e7-4f0e-971e-b8a1d00bee89)

Pode ser feito tambem, a atualizacao dos dados ou exclusao clicando nos botoes(Lapis e Lixeira) logo apos as infomacoes da empresa.

Alem dessas funcionalidades, com o cadastro de varias empresas pode acabar ficando dificil encontrar uma empresa especifica, entao para auxiliar na pesquisa, foi adicionado um espaco para pesquisar uma empresa pelo seu CNPJ

Basta digitar o CNPJ da empresa que deseja filtrar, que sera retornado as informacoes:
![image](https://github.com/vitouz/cadastroEmpresa_frontend/assets/112439603/669dd135-b738-472b-bb95-d8be162c2599)


## Para a Construção do Back-end foi utilizado:
- Express. para facilitar a criação de servidores web e o gerenciamento de rotas e solicitações HTTP.
- Cors. Permite criar solicitações HTTP de origens diferentes, tornando mais flexível o acesso a recursos da web.

## Para a criacao do Front-end foi utilizado: 
- Styled Components. Para estilizar os componentes
- Axios. Para conectar com a API.
- React Icons. Utilizado para tornar a experiencia com o usuario mais agradavel e facilitar no entendimento das determinadas acoes
- React Mask. Para criar mascaras de CNPJ e CEP, para formatar da maneira correta os dados na hora do preenchimento.

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
