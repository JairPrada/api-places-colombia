
<img align="right" alt="GIF" src="https://i.pinimg.com/originals/60/8a/c0/608ac0523f8b4159ab8a22148931167f.gif" width="100"/>
<h1>API-Places-Colombia </h1> 

Api para obtener nombres de los departamentos y ciudades de toda colombia realizada en node.js.

<h1>¿Que puedo hacer?</h1> 

## Obtener todos los departamentos

Una peticion tipo GET obtiene todos los departamentos de Colombia con sus respectivas ciudades.

#### Peticion usando JS:

```js
fetch('https://api-places-colombia.herokuapp.com/')
  .then(response => response.json())
  .then(data => console.log(data));
```
#### Resultado:
```js
[
  {
    "id": 0,
    "departamento": "Amazonas",
    "ciudades": [
      "Leticia",
      "Puerto Nariño"
    ]
  },
  {
  id": 1,
    "departamento": "Antioquia",
    "ciudades": [
      "Abejorral",
      "Abriaquí",
      ....],
   },.....
 ]
```
## Obtener un departamento especifico
Una peticion tipo GET enviando como parametro en la url el nombre del departamento retorna las ciudades asociadas a ese departamento.Para este caso usamos el departamento del Amazonas:
#### Peticion usando JS:
```js
fetch('https://api-places-colombia.herokuapp.com/Amazonas')
  .then(response => response.json())
  .then(data => console.log(data));
```
#### Resultado:
```js
{
  "id": 0,
  "departamento": "Amazonas",
  "ciudades": [
    "Leticia",
    "Puerto Nariño"
  ]
}
```


