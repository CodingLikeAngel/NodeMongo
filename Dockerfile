FROM node:latest

# Crea un directorio para la aplicación
RUN mkdir -p /usr/src/app

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json y ejecuta npm install para instalar las dependencias
COPY package.json .
RUN npm install

# Copia el código de tu aplicación
COPY . .

# Expone el puerto en el que tu aplicación escuchará solicitudes entrantes
EXPOSE 3000

# Ejecuta la aplicación cuando el contenedor se inicie
CMD [ "node", "server.js" ]