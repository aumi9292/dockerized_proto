# Kafka-Testing

## What is it?
This repo contains three folders:
1) **kafka**: this folder contains both the `producer.js` and `consumer.js` files needed to produce records to a kafka topic and listen to a kafka topic, respectively. The `consumer.js` file also automatically makes post requests to an api_proxy that needs to be running.
2) **api_proxy**: this is an api proxy that accepts post requests from the consumer, and allows any client to listen in and receive those records.
3) **data_persistence**: this folder contains data persistence-related files. Right now, it contains MongoDB-specific data that we could eventually incorporate in the api_proxy server. The current setup as of 7/7/2021, 4pm EST does not make use of this folder.

## To test locally:
1. Clone the repo
2. Place the necessary `.env` file in data_persistence folder, and the other `.env` file in kafka folder
3. CD into api_proxy and run `npm i`
4. From inside api_proxy folder, run `node server.js` (you should see `listening at localhost:3000` in console)
5. CD into kafka and run `npm i`
6. From inside kafka folder, run `node consumer.js stocks stocks_consumer_group`
7. Open a browser on `localhost:3000/topics/stocks`
8. From inside kafka folder, run `node producer.js stocks microsoft 125`
9. You should see this new record appear on your browser. (it might take a couple minutes)
10. Repeat step 8 above with `node producer.js stocks cocacola 89` to see another record appear, etc

You should also be able to run another consumer listening to a _any different_ topic by changing the last two flags passed to the `node consumer.js` command, then open a browser pointed to that different topic, and finally running a producer that publishes to that topic.
