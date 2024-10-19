# Lumi Data Hub (Front-End)

Desenvolvido para o teste de desenvolvedor Full Stack na Lumi. 

A aplicação tem o objetivo de ler arquivos PDFs de fatura de luz, armazenar dados relevantes no banco de dados e exibir através de uma interface intuitiva.

A aplicação segue o conceito de Atomic Design, priorizando componentes reutilizáveis e bem definidos.Não foi utilizado Redux ou Context API, pois a gestão de estado local com React é suficiente para o escopo do projeto, tornando a aplicação mais simples e leve.

## Configuração

Para instalar as dependencias utilize:

`npm install`

Para iniciar o projeto utilize:

`npm run start`

## Utilização

Existem duas rotas disponiveis

Home em:

`/`

Aqui acessar a biblioteca de faturas, além de poder filtrar e fazer pesquisas nas faturas ja cadastradas, para cadastrar uma fatura utilize o botão de upload(um pdf ou multiplos pdfs)

Dashboard em:

`/dashboard/:id`

No  Dashboard é possivel acessar os dados de cada fatura (clicando no card do mês/ano da fatura), também é possivel acessar o Resumo de consumo e finanças e diversos graficos com informações uteis

***Atenção: A aplicação so funcionara corretamente se a api estiver sendo executada, por padrão(editavel em .env) na rota 8080.***

## Testes

Testes unitarios para utilizar as formulas matematicas empregadas para garantir um retorno de dados preciso, além de garantir o funcionamento correto da aplicação.

Utilize:

`npm run test`

## Tecnologias Utilizadas:

* **React** (Biblioteca para construção da interface)
* **React Router** (Navegação entre as páginas)
* **TailwindCSS** (Estilização)
* **Chart.js** (Visualização de dados com gráficos)
* **Typescript** (Tipagem estática)
* **Jest** (Testes unitários)
