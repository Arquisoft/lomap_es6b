import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/add-place.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;
defineFeature(feature, test => {
  
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: false});
    page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768})

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('The user wants to add a new place', ({given,when,then}) => {
    
    let username:string;
    let password:string;

    given('A logged user', async () => {
      username = "AdrianaManuelAlicia"
      password = "AdrianaManuelAlicia"
      await expect(page).toClick('#login-button')

      await page.waitForSelector('#username').then(
          () => expect(page).toFill('#username', username)
      )
      await expect(page).toFill('#password', password)
      await expect(page).toClick('#login')
      await page.waitForSelector('#login-success').then(
          () => expect(page).toFill('#login-success', username)
      )
    });

    when('I fill the form, click on the map and press \'Add Place\'', async () => {
      await page.waitForSelector('#addplace-icon').then(
          () => expect(page).toClick('#addplace-icon')
      )
      await page.waitForSelector('#input-name').then(
          () => expect(page).toFill('#input-name', "Testing place")
      )
      await page.waitForSelector('#input-description').then(
          () => expect(page).toFill('#input-description', "This is a testing description about this testing place.")
      )
      await page.waitForSelector('#select-categories').then(
          () => expect(page).toClick('#select-categories')
      )
      await page.waitForSelector('#Bar').then(
          () => expect(page).toClick('#Bar')
      )
      await page.waitForSelector('#Bar', {hidden: true}); //esperamos a que se cierre el diálogo, sino da fallos

      //await page.select('#select-categories', 'Bar')

      await page.waitForSelector('#map-id').then(
          () => expect(page).toClick('#map-id')
      )

      await page.waitForSelector('#add-place-button').then(
          () => expect(page).toClick('#add-place-button')
      )
    });

    then('A confirmation message should be shown in the screen and the place should be in the list', async () => {
      await page.waitForSelector('#addplace-success').then(
          () => expect(page).toFill('#addplace-success', username)
      )
      await page.waitForSelector('#place-icon').then(
          () => expect(page).toClick('#place-icon')
      )
      await page.waitForFunction(() => {
        const text = document.body.innerText;
        return text.includes('Testing place');
      });
      await page.waitForFunction(() => {
        const text = document.body.innerText;
        return text.includes('This is a testing description about this testing place.');
      });
    });
  })

  afterAll(async ()=>{
    //DELETING ALL CREATED PLACES
    await page.waitForSelector('#settings-icon').then(
        () => expect(page).toClick('#settings-icon')
    )
    await page.waitForSelector('#deletealldata-button').then(
        () => expect(page).toClick('#deletealldata-button')
    )
    await page.waitForSelector('#confirm-deletealldata').then(
        () => expect(page).toClick('#confirm-deletealldata')
    )
    await page.waitForFunction(() => {
      const text = document.body.innerText;
      return text.includes('All data removed successfully!\n');
    });

    browser.close()
  })

});

