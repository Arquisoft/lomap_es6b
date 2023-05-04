# LoMap ES6B

![](lomap_logo.png)

[![CI for LOMAP_ES6B](https://github.com/Arquisoft/lomap_es6b/actions/workflows/lomap_es6b.yml/badge.svg)](https://github.com/Arquisoft/lomap_es6b/actions/workflows/lomap_es6b.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es6b&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es6b)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es6b&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es6b)

## 💻 Project developers

[![Adriana](https://img.shields.io/badge/UO283840-Adriana%20Arias-hotpink)](https://github.com/uo283840)
[![Alicia](https://img.shields.io/badge/UO275727-Alicia%20Fernández-purple)](https://github.com/aliciafp15)
[![Manuel](https://img.shields.io/badge/UO282249-Manuel%20López-blue)](https://github.com/uo282249)

---
## Technologies used
![React](https://img.shields.io/badge/REACT-%20-yellow) 
![NodeJS](https://img.shields.io/badge/NODE.JS-%20-green)
![SOLID](https://img.shields.io/badge/SOLID-%20-purple)
![MATERIAL-UI](https://img.shields.io/badge/MATERIAL--UI-%20-blue)
![GITHUB-PAGES](https://img.shields.io/badge/GH--PAGES-%20-red)
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
