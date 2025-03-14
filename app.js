// importações de dependencias e módulos nativos
const express = require('express');
const path = require('path');

//chamada de arquivos
const routes = require(path.resolve(__dirname, 'routes.js'));

//criação de variaveis
const app = express();
const port = 3000;

//uso de middlewares do express e outras dependencias
app.use(express.urlencoded({ extended: true })); //Habilita o recebimento de estruturas de dados (arrays e objetos) via metodo post
app.use(express.static(path.resolve(__dirname, 'public')));//Habilita o uso das páginas estáticas apartir da pasta public

//uso de middlewares criados no projeto OBS : os middlewares globais, deverão sempre ser adicionados antes das rotas, para que a ordem de execução e consequentemente o bom funcionamento ocorra
app.use(routes);

//view engine
app.set('views', path.resolve(__dirname, 'src', 'views'));// definição da pasta referente as views do projeto 
app.set('view engine', 'ejs');// definindo o motor de renderização e componentização do projeto

app.listen(port, () => {
    console.log(`Servidor rodando na porta : ${port}`);
    console.log(`Acesse : http://localhost:${port}`);
});
