## Problema

Precisamos construir um webservice capaz de calcular a rota mais curta para um serviço de entregas.
O serviço será primeiramente carregado com mapas de distâncias, por exemplo:
 
A B 10

B D 15

A C 20

C D 30

B E 50

D E 30 
 
Segundo o mapa acima, para chegar de A a D precisamos fazer a rota ABD que custará (10+15)km.
 
Precisamos de:
 
- endpoint para cadastrar os mapas
  entradas:
  - nome do mapa
  - mapa de distâncias (formato livre)
  retorno:
  - status: ok ou erro

- endpoint para calcular uma rota
  
  entradas:
  - nome do mapa
  - ponto inicial
  - ponto final
  - custo por km
  
  retorno:
  - status: ok ou erro
  - rota: lista de pontos
  - distância
  - custo total do trajeto
FRONTEND

Dado o webservice acima, suponha que somente o cadastro de mapas está pronto, e que há um endpoint servindo o mapa completo. Construa uma calculadora capaz de calcular rotas em tempo real! Os mapas precisarão ser consultados num determinado webservice.

## Scripts

```yarn start ```
  - Roda o server mock e o app

```yarn test ```
  - Roda os testes
