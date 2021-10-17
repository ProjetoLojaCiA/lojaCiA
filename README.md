# Projeto Loja CiA  - Projeto para fins avaliativos e com objetivo de demonstrar princípios e conceitos de programação orientada ao objeto.

![LojaCiA 1 3](https://user-images.githubusercontent.com/62221072/137609014-e80aa111-5658-4992-83eb-5685e152a850.png)


## Especificações inciais da aplicação:
* A aplicação simula a interface de uma loja online, tal como os casos de uso relacionados ao usuário/cliente.
* Conta com um sistema de login, autenticação, visualização de catálago, edição do carrinho, escolha do método de pagamento e envio.

## Tecnologias utilizadas:
* A IDE utilizada para implementação foi o Visual Studio Code.
* Para a produção dos diagramas de classes, utilizou-se a ferramenta UML Visual Paradigm.
* Foi utilizado a linguagem TypeScript para realizar a implemntação. Por se se tratar de projeto com objetivo exarcebar os conceitos de POO, era necessário uma linguagem
fortemente tipada. Adicionalmente chegamos a conclusão de que a interface visual seria importante para demonstração do funcionamento do código e por isso a linguem em script.
* Auxiliarmente, foi utilizado a biblioteca do react para facilitar a implementação, tal como Styled Components para a estilização. 

## Especificações do código:

### Classes:
* Loja
* Cliente
* Estoque
* Produto
* Endereco
* Carrinho
* Pedido
* Boleto
* Cartão
* Correios
* Transportadora

### Interfaces:
* IEntrega
* IPagamento

## Durante a criação das classes nos atentamos a três dos príncipios mais importantes em orientação ao objeto, vindo do famoso S.O.L.I.D:
*SRP — Single Responsibility Principle:
Princípio da Responsabilidade Única — Uma classe deve ter um, e somente um, motivo para mudar.
Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executa:
  <ol>
  <li> As classes impleemntadas são coesas com sua função;
  <li> Tem uma única responsabilidade o que gera menos dependências;
  <li> E são fáceis de ser reutilizadas.
  </ol>



