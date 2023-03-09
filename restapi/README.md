## Restapi
The objective for this part is to make a rest API using Express, Node.js and MongoDB using Javascript.

Lets analyze the packages used in this part (file package.json):
- express: this is the main dependency for building the API. Express is a NodeJS web framework very useful for building API endpoints though it has other applications as well.
- dotent: dependency to link variables to files. Mainly used to keep api keys and passwords out of sight of the code when its published.
- mongoose: dependency to connect with MongoDb.
- nodemon: to restart our server everytime we save the file.
     
The code is quite straight forward, the [index.js](index.js) file launchs the api.

For launching the API, first make sure you have the dependencies with `npm install`. 
Then we can use `npm start`to launch the file `server.ts` 

### Monitoring (Postman)
Once we have our database connected after the last two commands, we can simulate a few petitions between our webservice via Postman. This API also simulates the petitions made with the client.
Open it and try to run some rest methods like post, get, patch or delete. It is listening on port 3000.
For example `localhost:3000/api/getAll`

### MongoDB Compass
Now that we have connected our database with the backend, we can also study the data with more details if we look it in MongoDb, not just some rest methods.
MongoDB Compass is a GUI program for querying, aggregating, and analyzing your MongoDB data in a visual environment.
