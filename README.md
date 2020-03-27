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

## API Endpoints

### /rooms

**GET /** Returns all the rooms in the api

**POST /** Posts a new room in the api. Expected data are:

- name: string|required
- name: string|required
- type: string|required
- bed_capacity: number|required,
- available_beds: number|required,
- cost_per_bed: number|required,
- mixed: boolean|require

Throws:

- 400: Bad data

**PATCH /id** Updates a new room in the api. Following fields can be updated:

- name: string
- name: string
- type: string
- bed_capacity: number,
- available_beds: number,
- cost_per_bed: number,
- mixed: boolean|required

Throws:

- 404: Not found room
- 400: Bad data

**DELETE /id** Removes a room from the API

Throws:

- 404: Not found room

### /rooms/available

**GET /**
Checks for all the available rooms in the API.

### rooms/reservation/cost

**POST /**
Calculates the cost of a reservatio. It expects a body with an array of objects filled with the below fields:

- beds: number|required
- room_id: number|required

### rooms/reservation

**POST /**
Reserves rooms. It expects a body with an array of objects filled with the below fields:

- beds: number|required
- room_id: number|required

## Testing

To run test: `adonis test`
