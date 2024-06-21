<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# API coWorking

## Project Description
The API will allow users to reserve workspace in a coworking space for a specific session, facilitating space occupancy management and enhancing the user experience.

### Skills
- TypeScript
- NestJs
- PostgreSQL

## 🛠 Project Set-Up

### Installing NestJs:
To install NestJs, follow these steps:

1. Open the terminal (It is recommended to use GitBash or your IDE's terminal).
2. Execute the following command to install NestJs on your device:

    ```sh
    npm i -g @nestjs/cli
    ```

### Repository Installation:
To clone the repository to your local machine and access the project's files, use the following command:

    ```sh
    git clone -b main https://github.com/SebasRojasM1/coWorking-NESTJS.git
    ```

This ensures that the repository is available on your device for you to use its information and work on it.

#### Dependencies used:
- `@nestjs/mapped-types`: Facilitates the creation of mapped types in NestJS.
- `@nestjs/swagger`: Provides integration with Swagger to generate automatic API documentation.
- `class-validator`: Adds validations to TypeScript classes.
- `class-transformer`: Allows safe and efficient object transformation.
- `typeorm`: ORM for TypeScript and JavaScript.
- `@nestjs/typeorm`: TypeORM module for NestJS.
- `@nestjs/config`: Configuration module for NestJS.
- `pg`: Package for interacting with PostgreSQL databases.

#### Install dependencies
To use the project, we need to install all the necessary libraries and packages for its proper execution.

    ```sh
    npm install // npm i
    ```

### Running the project
To run the project, open your console and execute the following command to initialize the project:

    ```sh
    npm run start:dev
    ```

### Environment variables
We need to assign values to the environment variables for optimal project execution. In this case, the project's environment variables cover the persistence of the connection to our database and part of the token configuration and its expiration time.

    ```sh
    # PERSISTENCE CONNECTION
    DB_CONNECTION = mongodb://
    DB_HOST = localhost:3000
    DB_NAME = database name
    DB_USER = user 
    DB_PASSWORD = DB password
    ```

### Postman
You can execute each of the services already established in the project through the endpoints that have been set up in a Postman collection, from creating, editing, deleting, and other actions.

Access the Postman collection:
- [Postman Collection]()

_Reminder: To use it, ensure that the project is running correctly._

### Swagger
You can execute each of the services established in the project using Swagger. Simply run the project and access a specific route, where you will find each of them and consume the one you require, displaying each option with its details.

    ```sh
    http://localhost:3000/api
    ```
Or click on this shortcut:
- [Access the project Swagger](http://localhost:3000/api-doc)


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
