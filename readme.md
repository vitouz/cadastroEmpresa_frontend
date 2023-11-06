# Cadastro de empresas

## Resumo do projeto
Uma aplicação full-stack, com o backend construído em Node.js e o frontend construído em React.js, armazena informações de empresas em um banco de dados MySQL.

A aplicação permite o cadastro de empresas, que são armazenadas no banco de dados. Para isso, basta preencher todos os campos solicitados no formulário, como exemplificado abaixo:
![image](https://github.com/vitouz/cadastroEmpresa_frontend/assets/112439603/808c1528-154b-412c-b76b-19cf20c1bcfd)
Após preencher os campos, basta clicar em "Salvar" para criar um novo cadastro.

Após o cadastro, as informações da empresa são exibidas abaixo do formulário:
![image](https://github.com/vitouz/cadastroEmpresa_frontend/assets/112439603/a191e9ae-26e7-4f0e-971e-b8a1d00bee89)

Você também pode atualizar ou excluir os dados da empresa clicando nos botões (Lápis e Lixeira) após as informações da empresa.

Para facilitar a pesquisa de empresas, foi adicionado um campo de pesquisa, onde é possível buscar uma empresa pelo seu CNPJ, como mostrado na imagem abaixo:
![image](https://github.com/vitouz/cadastroEmpresa_frontend/assets/112439603/669dd135-b738-472b-bb95-d8be162c2599)

## Para a Construção do Back-end foi utilizado:
- Express: para facilitar a criação de servidores web e o gerenciamento de rotas e solicitações HTTP.
- Cors: permite criar solicitações HTTP de origens diferentes, tornando mais flexível o acesso a recursos da web.

## Para a criacao do Front-end foi utilizado: 
- Styled Components: para estilizar os componentes.
- Axios: para conectar com a API.
- React Icons: utilizado para melhorar a experiência do usuário e facilitar o entendimento das ações.
- React Mask: para criar máscaras de CNPJ e CEP, formatando corretamente os dados durante o preenchimento.


