# Kafka-Testing

## What is it?

This repo contains three folders:

1. **kafka_consumer**: this folder contains `consumer.js`, which is a `kafkajs` Kafka consumer that listens to a Kafka cluster and makes `HTTP` `POST` requests to `api_proxy`. This folder also contains `data_persistence/`, which holds helper methods to interact with MongoDB to save records to the database.

2. **api_proxy**: this is an api proxy that accepts `POST` requests from the consumer and allows any client to listen for events.

3. **kafka_producer**: this contains `producer.js`, which should be run locally. It publishes an event to a remote Kafka broker. Running it takes the following three arguments: `<TOPIC> <KEY> <VALUE>`.

## To test locally:

1. Clone the repo
2. Run `docker-compose up`
3. Navigate to `localhost:3000`
4. Locally, in a new terminal from the `/kafka_producer` directory, run `node producer.js weather colorado hot`

\*NOTE: To actually produce events, the remote Kafka cluster must be up and running.
