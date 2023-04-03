<h1 align="center">PalmPet</h1>

<p align="center">Um aplicativo de adoção de animais em React Native.</h1>


## Sobre

Um aplicativo simples de adoção de animais desenvolvido para celulares utilizando Javascript como linguagem principal de desenvolvimento e a biblioteca React Native. O software em questão é, na verdade, um teste passado pela empresa PalmSoft, em que o objetivo é desenvolver uma aplicação mobile que possua uma tela de login, uma página principal (Home Page) e uma tela de detalhamento do item selecionado.

Para o desenvolvimento foram utilizadas as seguintes tecnologias:

- Javascript
- React Native
- Node.js (v19.8.1)
- Npm/Npx (v8.19.2)
- Expo (v6.3.2)

**Observação:** a IDE utilizada para a contrução do projeto foi o Visual Studio Code e o sistema operacional utilizado foi o Arch Linux.

**Plataforma de teste**: Celular físico via Expo Go (QR Code).

É importante citar também que o modelo de celular utilizado para os testes foi o Galaxy A10s, que possui uma tela de 6,2 polegadas.

## Características

No projeto estão presentes as seguintes telas disponíveis para o usuário:

### 1. Tela de boas vindas.

Uma página simples para dar as boas vindas ao usuário. A página contém o logo do aplicativo e um botão para a progressão para a próxima tela. Além disso, tanto a logo quanto o container contendo os textos/instruções possuem animações quando a página é inicializada.

Imagem:

<img src="./assets/img/ReadmeImages/welcome_page.jpg" alt="Tela de boas vindas." width="30%">

### 2. Tela de login.

A página de login possui dois campos: o de e-mail e o de senha. Para poder entrar e avançar, o usuário deve ter uma conta cadastrada. Caso não possua uma conta registrada, é possível clicar no link "Cadastre-se aqui" para ser redirecionado para a página de cadastro.

**Observação**: É possível pular a etapa de cadastro utilizando o login de administrador, que foi criado para facilitar e agilizar os testes. Para isso, deve-se preencher os campos com os dados presentes no arquivo admin.js.

Imagem:

<img src="./assets/img/ReadmeImages/login_page.jpg" alt="Tela de login." width="30%">

### 3. Tela de cadastro.

Na página de cadastro é efetuada a criação de uma conta para poder avançar na tela de login posteiormente. Aqui são realizadas diversas validações para identificar se o usuário preencheu os campos corretamente. Após o cadastro o usuário é redirecionado para a tela de login.

**Observação:** A conta criada não é armazenada por nenhum tipo de banco de dados, ou seja, ela é válida apenas para a sessao atual. Caso a aplicação seja reiniciada, os dados da conta serão perdidos.

Imagem:

<img src="./assets/img/ReadmeImages/register_page.jpg" alt="Tela de cadastro." width="30%">

### 4. Tela principal

Também chamada de Home Page, essa é a tela principal da aplicação em que o usuário tem acesso ao conteúdo. No caso, a página é composta por uma lista de animais e de categorias para os mesmos. Ao selecionar uma categoria específica, serão exibidos apenas os animais que estão listados nela. Ao clicar em algum animal, o usuário é levado para a próxima página.

Imagem:

<div style="display:flex">
    <img src="./assets/img/ReadmeImages/home_page.jpg" alt="Tela principal." width="30%" style="padding:15">
    <img src="./assets/img/ReadmeImages/category_page.jpg" alt="Tela principal com categoria selecionada." width="30%" style="padding:15">
</div>


### 5. Tela de detalhamento

Uma tela simples, porém elegante, que expande a imagem do animal e mostra dados adicionais como idade, nome, contato e descrição.

Imagem:

<img src="./assets/img/ReadmeImages/detail_page.jpg" alt="Tela de detalhes." width="30%">
