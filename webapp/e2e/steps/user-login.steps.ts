import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/user-login.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: false, slowMo: 50 });
    page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768})
    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('The user owns a solid POD and wants to log into the application', ({given,when,then}) => {
    
    let username:string;
    let password:string;

    given('A registered user', () => {
      username = "AdrianaManuelAlicia"
      password = "AdrianaManuelAlicia"
    });

    when('I click on the login button and fill my Inrupt credentials', async () => {
      await expect(page).toClick('#login-button')

      await page.waitForSelector('#username').then(
          () => expect(page).toFill('#username', username)
      )
      await expect(page).toFill('#password', password)
      await expect(page).toClick('#login')
    });

    then('A confirmation message should be shown in the screen', async () => {
      await page.waitForSelector('#login-success').then(
          () => expect(page).toFill('#login-success', username)
      )
    });
  })

  afterAll(async ()=>{
    browser.close()
  })

});

