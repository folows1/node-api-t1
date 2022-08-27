# Trabalho 1 - Técnicas de Programação VI - Node.js

## Clonando o projeto no GitHub

```bash
git clone https://github.com/folows1/node-api-t1.git
cd node-api-t1
```

## Rodando o container Docker

```bash
docker build -t node-api-t1 .
docker run -p 3001:3001 node-api-t1
```

## (OPCIONAL) Rodando o servidor pelo npm

```bash
npm i
npm run start
```

## Endpoint para realizar o POST

```bash
http://localhost:3001/api/v1/classes
```
## JSON Type

```json
{
  "ano": "string",
  "semestre": "number",
  "dias_da_semana": [ "number" ]
}
```

## Exemplo de JSON a ser enviado

```json
{
  "ano": 2020,
  "semestre": 2,
  "dias_da_semana": 
  [
    2, 3, 5
  ]
}
```


### Aluno - Michel Ribeiro Corrêa
### GitHub: [folows1](https://github.com/folows1)