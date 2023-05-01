# LoMap ES6B

-Manuel López Zürcher

-Adriana Arias Coya

-Alicia Fernández Pushkina




[![CI for LOMAP_ES6B](https://github.com/Arquisoft/lomap_es6b/actions/workflows/lomap_es6b.yml/badge.svg)](https://github.com/Arquisoft/lomap_es6b/actions/workflows/lomap_es6b.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es6b&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es6b)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es6b&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es6b)

<p float="left">
<img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" height="100">
<img src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png" height="100">
</p>

## 🚀 How to deploy locally

In this version we deploy the app locally without docker.

*We will assume that you already have our project downloaded in your PC.*

1) Open your terminal and go into the folder where you have downloaded the project.
2) Go into the `webapp` folder.
```shell
cd webapp
```
3) Install the dependencies with `--force` to avoid errors.
```shell
npm install --force
```
4) Finally, run the app with:
```shell
npm start
```
_If the application doesn't open automatically, you can open it in your browser in [http://localhost:3000](http://localhost:3000)._

## 🧪 How to run the tests 
### ⚙️ Unit tests
1) Go to the `webapp` folder.
```shell
cd webapp
```
2) Run the tests with:
```shell
npm test -- --coverage --watchAll=false
```
### 🖥️ E2E tests
**Important: The app must be running in order to run the E2E tests!**
1) Go to the `e2e` folder.
```shell
cd webapp/e2e
```
2) Run the tests with:
```shell
npx jest . 
```
_Optionally, you can run the tests with the `--runInBand` flag to run the tests sequentially._
