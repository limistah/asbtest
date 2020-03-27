# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

This project is dockerized, and contains a Dockerfile which basically bootstraps a container image for AdonisJS application, it expects that you have Docker and Docker Compose installed. To run off docker, simply run `docker-compose up --build`. This command would make the project available on port `3333` of the host computer. This commands also refreshes the migration and seeders.

If you don't have docker simply clone the repo and then run `npm install`.
After which you can run the migrations and seeds with `adonis migration:run && adonis seed`.
Now, you start the application using: `adonis server --dev`

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
