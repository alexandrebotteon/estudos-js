# Estudos em JavaScript

## Conhecendo o JS - Módulo A

### O que JS é capaz de fazer?

* _Client X Server_

#### Website
* __Conteúdo__ (HTML)
* __Design__ (CSS)
* __Interações__ (JavaScript)

#### Quem usa JS?
* Google
* Youtube
* LinkedIn
* Netflix
* Facebook

#### Inspecionar sites (F12)
* Apenas o cliente é afetado, nada ocorre com o servidor

---
### Evolução do JS

#### Linha do Tempo
* 1970
   * DARPA - Tecnologia Militar
   * Arpanet
   * Internet

* 1993
   * Linguagem HTML
   * Protocolo HTTP
   * WWW - World Wide Web
   * CERN
   * Mosaic - Navegador

* 1994
   * NetScape - Navegador mais famoso da Internet (Época)

* 1995
   * MOCA (LiveScript) - Linguagem de Programação
   * Java - Linguagem de Programação (Nascendo na mesma época e sucesso na mídia)
   * Mudança de LiveScript para JavaScript (JS) - Jogada de marketing e grande sucesso
   * Windows 95 e criação do Internet Explorer - Microsoft
   * Microsoft cria JScript - Base do JavaScript com melhorias

* 1997
   * ECMA - Padronização de sistemas de informação
   * Surgimento do ECMAScript - Versão padronizada do JavaScript

* 2002
   * Internet Explorer se torna o navegador mais utilizado
   * NetScape acaba em falência
   * Fundação Mozilla - Criação do Firefox

* 2008
   * Criação do Google Chrome - Google
   * Um dos navegadores mais utilizados pelo mundo

* 2009
   * V8 para GoogleChrome - Motor para rodar o JavaScript
   * V8 gerava código JIT (Just In Time)
   * V8 possui código aberto

* 2010
   * Criação do Node.js - Criado para rodar JavaScript fora do navegador
---
### JS versus ECMAScript

#### Linha do Tempo
* 1997
   * Surge ECMAScript - Versão 1.0
   * Versão padronizada do JavaScript

* 1998
   * ECMAScript - Versão 2.0
   * Pequenas atualizações e melhorias

* 1999
   * ECMAScript - Versão 3.0
   * Compatibilidade com expressões regulares
   * Bloco Try/Catch adicionado

* 2009
   * Após anos sem atualização e apenas promessas - ECMAScript Versão 5 (ES5)
   * Compatível com a maioria dos navegadores atuais
   * Compatibilidade com .json
   * Versão com mais reconhecimento
   
* 2015
   * ECMAScript - Versão 6 (ES6)
   * Versão com grande popularidade atualmente
   * Melhorias e atualizações para declarações

* 2016
   * ECMAScript 2016
   * Pequenas atualizações

* 2017
   * ECMAScript 2017
   * Pequenas atualizações

* 2018
   * ECMAScript 2018
   * Pequenas atualizações

#### Tecnologias que utilizam do JavaScript
* JQuery (Mozilla)
* Angular (Google)
* React (Facebook)
* Vue (Ex-Programador Google)
* Electron (GitHub)
* Ionic
* Cordova (Apache)
---
### Primeiros passos no JS

#### Bibliografia - Livros sobre JavaScript
* JavaScript: O Guia Definitivo (David Flanagan)
* JavaScript - Guia do Programador (Maujor)
* Guia de referência JavaScript da Mozilla - [Clique aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
* Guia de referência JavaScript da ECMA - [Clique aqui](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

#### Softwares para instalação
* Navegador (Recomendado Google Chrome) - [Clique aqui](https://www.google.com/intl/pt-BR/chrome/)
* Editor de Códigos - IDE (Recomendado VS Code) - [Clique aqui](https://code.visualstudio.com/)
* Node.js - Objetivo de facilitar a visualização do JavaScript fora do navegador - [Clique aqui](https://nodejs.org/en)
---
### Primeiros scripts em JS
* Estudos realizados dentro da pasta _**Aulas\Aula04 - Primeiros Scripts**_

* Aprendendo de maneira simples como aplicar comando básicos de JavaScript em uma página da web

#### Comando estudados
* `window.alert()` ou `alert()` -> Criação de uma caixa de alerta (_**Alert Box**_) com um botão _**OK**_

* `window.confirm()` ou `confirm()` -> Criação de uma caixa de confirmação (_**Confirmation Box**_) com um botão _**OK**_ e um botão _**Cancel**_

* `window.prompt()` ou `prompt()` -> Criação de uma caixa para inserção de texto (_**Input Box**_) com um botão _**OK**_, um botão _**Cancel**_ e uma _**opção de inserção de texto**_

---

## Comandos Básicos do JS - Módulo B

### Tipos de Dados e Variáveis

#### Comentários no JS - Documentação e depuração de seu código
* `//(comentário)` para comentários de uma linha

* `/* (comentário) */` para comentários de mais de uma linha

#### Variáveis
* `=` -> Utilizado para atribuir valores e sempre lido como ***recebe***

* `null` -> Atribuição de um valor ***nulo*** para a variável

* `var` -> Utilizado para identificar uma variável (pode também ser utilizado `let`)

* `""` ou `''` -> Delimitadores de ***strings***

#### Regras para os Identificadores (nomes das variáveis)
* Podem começar com ***letras***, ***$*** ou ***_***
* Não podem começar com ***números***
* É possível usar ***letras*** ou ***números***
* É possível usar ***acentos*** e ***símbolos***
* Não podem conter ***espaços*** (utilizar sempre ***_***)
* Não podem ser ***palavras reservadas*** pelo JS

#### Dicas para a criação de Identificadores
* Letras ***maiúsculas*** e ***minúsculas*** fazem diferença
* Tente usar ***nomes coerentes*** para as variáveis
* Evite se tornar um ***'programador alfabeto'*** ou um ***'programador contador'***

#### Exemplo de criação de variável
* `var n1 = 10` -> A varíavel de nome "n1" recebe o valor 10

* `var nome = "Alexandre"` -> A variável de nome "nome" recebe o valor "Alexandre"

#### Tipos primitivos primordiais
* `number` -> Tipo de variável que recebe ***números inteiros*** (`int`) e ***números reais*** (`float`)

* `string` -> Tipo de variável que recebe uma ***cadeia de caracteres***

* `boolean` -> Tipo de variável que recebe valores de ***verdadeiro*** (`true`) ou ***falso*** (`false`)

* Para verificar o tipo da variável ou valor, utilizamos o comando `typeof`

---

### Manipulação de Dados

* Estudos realizados dentro da pasta ***Aulas\Aula06 - Tratamento de Dados***

#### Concatenação
* Ligação entre o texto e uma variável

* `+` -> Utilizado para concatenar ou realizar a adição em JS
  * `string + string` -> Concatenação

  * `number + number` -> Adição

#### Conversão de Variáveis
* `string` -> `number`
  * `Number.parseInt(variável)` ou `parseInt(variável)` -> Para números inteiros

  * `Number.parseFloat(variável)` ou `parseFloat(variável)` -> Para números reais

  * `Number(variável)` -> Para números inteiros e números reais, com interpretação do JS

* `number` -> `string`
  * `String(variável)` -> Para string

  * `variável.toString()` -> Para string

#### Formatação de Strings
* Template String (Formatador de Strings)
  * `${variável}` -> Placeholder utilizado para digitar uma String de maneira mais simples

  * \` texto \` -> As crases são utilizadas neste momento para realizar a formatação

  * `Seja bem-vindo ${nome}` -> Este código retornará a mensagem com o valor que estiver armazenado na variável ***nome***

  > Concatenação e Template String estão corretos na utilização 

* `s.length()` -> Identifica a ***quantidade de caracteres*** que a ***string*** possui
  
* `s.toUpperCase()` -> Transforma o conteúdo da ***string*** em ***caixa alta*** (maiúsculas)

* `s.toLowerCase()` -> Transforma o conteúdo da ***string*** em ***caixa baixa*** (minúsculas)

#### Formatação de Números (Number)
* `n.toFixed(x)` -> Formata o ***número*** para uma ***quantidade de casas decimais específicas***, determinada pelo valor ***x***

* `n.toFixed(x).replace('.', ',')` -> Formata o ***número*** para uma ***quantidade de casas decimais específica***, determinada pelo valor ***x*** e ***substitui*** o '.' pela ',' do número

* `n.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})` -> Formata o ***número*** inserido para o ***estilo monetário*** utilizado no ***Brasil***

---

### Operadores do JS (Parte 1)

#### Aritméticos
* Binários (necessitam de duas entradas de dados)
  * `+` -> Adição de números

  * `-` -> Subtração de números

  * `*` -> Multiplicação de números

  * `/` -> Divisão real dos números (não apresenta resto, resultado possui decimais)

  * `%` -> Resto da divisão inteira (resto que sobrou de uma divisão de números)

  * `**` -> Potenciação de números

  > Cuidado com a precedência de operadores - Utilizar parênteses

  > Ordem de precedência - **Parênteses**; **Potenciação**; **Multiplicação e Divisão**; **Adição e Subtração**

#### Atribuição
* Simples
  * `=` -> Recebe o valor - Atribui um valor

  > Exemplo: `var a = 10` -> O valor que a variável ***a*** recebe é igual a 10

* Auto-atribuições
  * `=` -> Recebe o valor - Atribui um valor

  > Exemplo: `a = a + 4` -> O valor que a variável ***a*** recebe é igual ao seu ***valor anterior*** somado o valor 4

  * `+=` -> Recebe o valor atual da variável somado com o valor a frente da atribuição

  > Exemplo: `a += 4` -> O valor que a variável ***a*** recebe é igual ao seu ***valor anterior*** somado o valor 4

  * `-=` -> Recebe o valor atual da variável subtraído com o valor a frente da atribuição

  > Exemplo: `a -= 6` -> O valor que a variável ***a*** recebe é igual ao seu ***valor anterior*** subtraído o valor 6

  * `*=` -> Recebe o valor atual da variável multiplicado com o valor a frente da atribuição

  > Exemplo: `a *= 10` -> O valor que a variável ***a*** recebe é igual ao seu ***valor anterior*** multiplicado o valor 10

  * `/=` -> Recebe o valor atual da variável dividido com o valor a frente da atribuição

  > Exemplo: `a /= 2` -> O valor que a variável ***a*** recebe é igual ao seu ***valor anterior*** dividido o valor 2

  * `%=` -> Recebe o valor do resto do valor atual da variável com a divisão inteira do valor a frente da atribuição

  > Exemplo: `a %= 31` -> O valor que a variável ***a*** recebe é igual ao ***resto*** do seu ***valor anterior*** dividido o valor 31

  * `**=` -> Recebe o valor atual da variável potenciado com o valor a frente da atribuição

  > Exemplo: `a **= 12` -> O valor que a variável ***a*** recebe é igual ao seu ***valor anterior*** potenciado com o valor 12

* Incremento
  * `++` -> Adiciona uma unidade no valor da variável
  
  * `--` -> Subtrai uma unidade no valor da variável

  * Existem o ***pré-incremento*** e o ***pós-incremento***, assim como existe o ***pré-decremento*** e ***pós-decremento***
 
  > Exemplo: `n++` -> pós-incremento | `--n` -> pré-decremento

---

### Operadores do JS (Parte 2)

> Os ***operadores aritméticos***, ***operadores relacionais*** e ***operadores lógicos*** também possuem ordem de precedência, seguindo respectivamente a ordem informada

#### Relacionais
* `>` -> Operador maior

* `<` -> Operador menor

* `>=` -> Operador maior ou igual

* `<=` -> Operador menor ou igual

* `==` -> Operador igualdade

* `!=` -> Operador diferente ou não igual

* `===` -> Operador identidade ou de igualdade restrita - Verifica a igualdade do valor de grandeza e o tipo das entradas na operação

* `!==` -> Operador identidade ou de desigualdade restrita - Verifica a desigualdade do valor de grandeza e o tipo das entradas na operação

> Para toda expressão que possui **operadores relacionais**, seu resultado será **booleano (true ou false)**

> A ordem de precedência dos ***operadores relacionais*** se encontra da esquerda para direita com a leitura do código

#### Lógicos
* Unários (necessitam de uma entrada de dados)
  * `!` -> Operador de negação (operador unário - possui apenas uma entrada)

* Binários (necessitam de duas entradas de dados)
  * `&&` -> Operador de conjunção - Conhecido como o operador ***e***

  * `||` -> Operador de disjunção - Conhecido como o operador ***ou***

> Para toda expressão que possui **operadores lógicos**, seu resultado será **booleano (true ou false)**

> A ordem de precedência dos ***operadores lógicos*** é: `!`, `&&` e `||` respectivamente

#### Ternário
* `?` e `:` -> Os operadores ternários se baseiam em três entradas de dados `teste ? true : false`

> O ***resultado booleano (true ou false) do teste*** irá informar o que ocorrerá com a expressão, sendo a primeira opção ***true*** e a segunda ***false***
