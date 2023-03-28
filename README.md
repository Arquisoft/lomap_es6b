# LoMap ES6B

-Manuel López Zürcher

-Adriana Arias Coya

-Alicia Fernández Pushkina

-Jaime Sánchez Lorenzo



[![CI for LOMAP_ES6B](https://github.com/Arquisoft/lomap_es6b/actions/workflows/lomap_es6b.yml/badge.svg)](https://github.com/Arquisoft/lomap_es6b/actions/workflows/lomap_es6b.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es6b&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es6b)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es6b&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es6b)

<p float="left">
<img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" height="100">
<img src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png" height="100">
</p>

## How to deploy locally :)

In this version we deploy the app locally without docker. In order to solve the problem that you will get for trying to run our project with mongo, follow these steps:

*We will assume that you already have our project downloaded in your PC.*

1) Go into our `restapi` folder.
2) You will see a file called `.env_sample` with this content
   ```bash
   DATABASE_URL = mongodb+srv://username:password@lomapes6b.qrix8pk.mongodb.net/test
3) You will have to create in your repository your own file called `.env`, with the same content showed above, but updated with your MongoDb access data. If you don´t have access yet, contact us.

4) Now, open one terminal, compile and run `restapi`. If everything went well, you will read *database connected*.
   ```shell
   cd restapi
   npm install
   npm start
   ```
5) Now the same with `webapp`. Don´t mind if you see some errors after install. These doesn´t affect the execution and will be removed in future versions.****
   ```shell
   cd webapp
   npm install
   npm start
   ```



If everthing went well, you should be able to access the application in [http://localhost:3000](http://localhost:3000).
