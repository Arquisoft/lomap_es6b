# LoMap ES6B

![](lomap_logo.png)

[![CI for LOMAP_ES6B](https://github.com/Arquisoft/lomap_es6b/actions/workflows/lomap_es6b.yml/badge.svg)](https://github.com/Arquisoft/lomap_es6b/actions/workflows/lomap_es6b.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es6b&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es6b)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es6b&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es6b)


## 🧑🏻‍💻 Project developers
[![Adriana](https://img.shields.io/badge/UO283840-Adriana%20Arias-hotpink)](https://github.com/uo283840)
[![Alicia](https://img.shields.io/badge/UO275727-Alicia%20Fernández-purple)](https://github.com/aliciafp15)
[![Manuel](https://img.shields.io/badge/UO282249-Manuel%20López-blue)](https://github.com/uo282249)

---
## 🐧 Technologies used
![React](https://img.shields.io/badge/React-0C9FCB)
![NodeJS](https://img.shields.io/badge/NodeJS-82CD28)
![SOLID](https://img.shields.io/badge/Solid-7D4CFF)
![MATERIAL-UI](https://img.shields.io/badge/Material--UI-007FFF)
![GITHUB-PAGES](https://img.shields.io/badge/GitHub%20Pages-363536)
![JavaScript](https://img.shields.io/badge/JavaScript-EAD41C)
![TypeScript](https://img.shields.io/badge/TypeScript-2F72BC)
![Gatling](https://img.shields.io/badge/Gatling-E47D54)
![Jest](https://img.shields.io/badge/Jest-99425B)
![Pupeeteer](https://img.shields.io/badge/Pupeeteer-00D59D)
![OpenStreetMaps](https://img.shields.io/badge/OpenStreetMaps-74560F)

---
## 🗺️ Deployed application
* You can access our deployed application [here.](https://uo282249.github.io/lomap_es6b)

* You can also access our documentation [here.](https://arquisoft.github.io/lomap_es6b/)

---
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

---
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

