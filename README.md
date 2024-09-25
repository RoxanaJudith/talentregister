# Backend API

## Dependencies

### Backend

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/es/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Running Proyect

- Check the package.json file for `npm` commands

```
npm install
```

To run this project you previously need to install:

- `docker` & `docker-compose`

### Running the App with Docker

#### Create the container's network

```
make network
```

o

```
docker network create -d bridge postgres-network
```

#### Starting the containers

```
make run
```

o

```
docker-compose up
```

#### Access the API container through SSH

```
make enter
```

o

```
docker exec -it $(APP_CONTAINER_NAME) /bin/bash -l
```

#### Access the DB container through SSH

```
make enter-db
```

o

```
docker exec -it $(DB_CONTAINER_NAME) psql -d $(POSTGRES_DB) -U $(POSTGRES_USER)
```

## Team

### Backend

- [Roxana Pérez](https://github.com/roxanajperez)
- [Gonzalo Acosta](https://github.com/acosta-gonzalo-agustin)
- [Anthony Sanchez](https://github.com/anthonysa0813)
- [Caled Contreras](https://github.com/calmahDev)
- [Daniel Garcia](https://github.com/DGRdeveloper)