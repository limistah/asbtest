# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

### Environment Variables

The following environment variables are required to be set in a `.env` file in the root of the application:

```
HOST=127.0.0.1
PORT=3000
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=smqMER11yGB0Lij6OjzlB0eRHrhYwNvT
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_DATABASE=adonis
HASH_DRIVER=bcrypt
```

### Database

This project uses postgres. Ensure to create a database with a name of `adonis` (specified in the env file).

A local postgres can be accessed with `psql -U postgres -P password`.

If it runs in a docker container, it could be accessed through: `docker exec -it postgres bash` then running `psql -U postgres` inside the bash provided for the container.

### Deploy environment

This project is dockerized, and contains a Dockerfile which basically bootstraps a container image for AdonisJS application, it expects that you have Docker and Docker Compose installed. To run off docker, simply run `docker-compose up --build`. This command would make the project available on port `3333` of the host computer. This commands also refreshes the migration and seeders.

If you don't have docker simply clone the repo and then run `npm install`.
After which you can run the migrations and seeds with `adonis migration:run && adonis seed`.
Now, you start the application using: `adonis server --dev`

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
