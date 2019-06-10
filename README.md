# Inalambria-Front
Repositorio para prueba técnica de inalambria. Este repositorio contiene el Fronted para el proyecto de la librería.

Este consiste en una WebApp sencilla realizada en Angular 8.

# Configuración 

## Online
Este proyecto puede ser accedido a través de internet en el siguiente [enlace](http://ec2-52-10-114-157.us-west-2.compute.amazonaws.com:3900).  Sin embargo si deseas ejecutarlo localmente a continuación se menciona cómo.

## Local:
Para ejecutar el proyecto en local  debes cumplir con los siguientes requisitos:
- NPM 6.0.0 o superior
- Node 8.4.0 o superior
- Angular CLI 8.0.0 (puede funcionar con versiones inferiores pero no se garantizan los resultados esperados)

Una vez clonado el repositorio, colocate en el directorio raíz del proyecto y ejecuta `npm install`, una vez finalizado ejecuta `ng serve --open` y al finalizar el proyecto estará ejecutando el localhost:4200 de tu máquina.

Recuerda que si deseas ejecutar el proyecto localmente también deberás ejecutar localmente el backend disponible [aquí](https://github.com/aczuleta/Inalambria-test).

# Manual de uso
El proyecto consiste en una simple aplicación web que simula una librería donde se pueden agregar, modificar y reservar libros.

Para lograr lo anterior nos valemos un sistema simple de autenticación y autorización de dos roles, ADMIN y USER.

Los ADMIN tienen derechos sobre el CRUD de libros y los USER pueden ver libros y reservarlos.

teniendo lo anterior en cuenta, puedes crear tu propio usuario según el rol que desees o usar algunos de prueba que mencionamos a continuación:

- Username: ZAC - ROL: ADMIN
- Username: azuleta - ROL : USER

