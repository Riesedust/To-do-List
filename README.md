# To Do List


## ¿Cómo probar el proyecto?

 1. Forkear el repositorio para tener una copia del mismo 
 2. pararse en la carpeta api con `cd /api` e instalar las dependencias con `npm install`
 3. iniciar el back con el comando `npm start`
 4. pararse en la carpeta api con `cd /client` e instalar las dependencias con `npm install`
 5. iniciar el front con el comando `npm start`

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `todo`

El contenido de `client` fue creado usando: Create React App.

#### Tecnologías usadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

