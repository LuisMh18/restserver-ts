# Notas ###########################################################################################################################
# Instalar TypeScript de manera global
# Ejecutar el siguiente comando -> `npm i -g typescript`
# Validar que se haya instalado correctamente -> `tsc --version` 
# -- ###############################################################################################################################

# Iniciar proyecto en Node Js
`npm init -y` 
# Esto nos crea el `package.json`

# Crear archivo de configuración de TypeScript 
`tsc --init` 
# Esto nos crea un archivo `tsconfig.json`

# -- ###############################################################################################################################
# En el archivo `tsconfig.json` buscar la linea `"outDir": "./",` descomentarla y ponerla de la siguiente manera `"outDir": "./dist",`
# Buscar y asegurarnos que este en modo estricto `"strict": true,`
# Buscar la linea `"sourceMap": true,` y descomentarla, esto nos va ayudar mucho a que si sucede un error en JavaScript sepa dónde esta el equivalente en el código de TypeScript

# -- ###############################################################################################################################
# En la raíz del proyecto crear un archivo llamado `app.ts`
# Despues ejecutar el siguiente comando en la terminal desde la raíz del proyecto
`tsc`
# Esto nos creara la carpeta `dist` con 2 archivos `app.js` y `app.js.map`

# -- ###############################################################################################################################
# Instalar`tslint` ejecutar el siguiente comando
`npm i tslint --save-dev`

# -- ###############################################################################################################################
# Instalar TypeScript de manera local en el proyecto
`npm i typescript --save-dev`

# -- ###############################################################################################################################
# Crear archivo de configuración del tslint, tenemos que apuntar a la ruta dónde se encuentra ese archivo, ejecutar el siguiente comando
`./node_modules/.bin/tslint --init`
# Esto nos creara en la raíz del proyecto un archivo llamado `tslint.json`

# -- ###############################################################################################################################
# Abrimos el archivo y en la parte de `"rules": {}` añadimos la siguiente regla `"no-console": false` esto es para que no nos tire errores a la hora de usar la consola -> console.log , debería de quedar de la siguiente forma: 
`
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console": false
    },
    "rulesDirectory": []
}

`
# -- ###############################################################################################################################
# NOTA: Hasta aquí los pasos de la confuración inicial. Estos pasos solo se ejecutan una vez cuando se va a crear el proyecto.
# -- ###############################################################################################################################

# Instalar express, cors y dotenv
 `npm i express cors dotenv`

# Ejecutar el siguiente comando, este paquete le ayuda a TypeScript a saber cuales son las firmas que tiene cada una de las funciones, metodos y cada una de las cosas que vamos a utilizar que no estan escritas en TypeScript, esta dependencia solo funciona en dev es decir cuando lo pasemos a prod no van a ir esas dependencias
`npm i --save-dev @types/express`

# -- ###############################################################################################################################

# Ejecutar el siguiente comando para compilar la aplicación de ts a js
 `tsc`

# -- ###############################################################################################################################
# Correr aplicación en modo de producción
# 1 - Compilar `tsc`
# 2 - En la terminal correr el comando `nodemon dist/app.js`

# -- ###############################################################################################################################
# Pra correrla en modo de desarrollo y no estar compilando cada vez que se haga un cambio se debe de hacer lo siguiente:
# 1 - En una terminal ejecutar el soguiente comando `nodemon dist/app.js`
# 2 - En otra terminal ejecutar el comando `tsc --watch` este comando esta escuchando todos los cambios que se hagan y lo compila automáticamente

# Instalar paquete para el tipado de cors de TypeScript 
`npm i --save-dev @types/cors`

# Instalar sequelize
`npm install --save sequelize`

# Instalar el paquete dependiendo de la base de datos con la que estes trabajando
# One of the following:
`npm install --save pg pg-hstore` # Postgres
`npm install --save mysql2`
`npm install --save mariadb`
`npm install --save sqlite3`
`npm install --save tedious` # Microsoft SQL Server
`npm install --save oracledb` # Oracle Database

# Instalar express-validator
`npm i express-validator`