import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/add-reviewcomment.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;
defineFeature(feature, test => {
  
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768})

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('The user wants to add an review comment to a place', ({given,when,then}) => {
    
    let username:string;
    let password:string;

    given('A logged user and a place', async () => {
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
      await page.waitForSelector('#addplace-icon').then(
          () => expect(page).toClick('#addplace-icon')
      )
      await page.waitForSelector('#input-name').then(
          () => expect(page).toFill('#input-name', "Text comments place")
      )
      await page.waitForSelector('#input-description').then(
          () => expect(page).toFill('#input-description', "This is a testing description about this testing place.")
      )
      await page.waitForSelector('#select-categories').then(
          () => expect(page).toClick('#select-categories')
      )
      await page.waitFor(1000)
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

      await page.waitForSelector('#place-icon').then(
          () => expect(page).toClick('#place-icon')
      )
    });

    when('I click on the add review comment button, make the review comment and submit it', async () => {
      //TODO: conseguir que pulse en el botón de comentarios
      await page.waitForSelector('[id="Text comments place-comments"]').then(
          () => expect(page).toClick('[id="Text comments place-comments"]')
      )
      await page.waitForSelector('#open-add-commentbt').then(
          () => expect(page).toClick('#open-add-commentbt')
      )
      await page.waitFor(1000)
      await page.waitForSelector('[id="Add a rating"]').then(
          () => expect(page).toClick('[id="Add a rating"]')
      )
      await page.waitForSelector('[id="Add a rating"]', {hidden: true}); //esperamos a que se cierre el diálogo, si no da fallos
      await page.waitForSelector('#add-commentbt').then(
          () => expect(page).toClick('#add-commentbt')
      )

      await page.waitForSelector('#confirm-add-review').then(
          () => expect(page).toClick('#confirm-add-review')
      )
      await page.waitForSelector('#confirm-add-review', {hidden: true}); //esperamos a que se cierre el diálogo, si no da fallos

      await page.waitForSelector('#showing-comments').then(
          () => expect(page).toClick('#showing-comments')
      )
      await page.waitForSelector('#rating-option').then(
          () => expect(page).toClick('#rating-option')
      )
      await page.waitForSelector('#rating-option', {hidden: true}); //esperamos a que se cierre el diálogo, si no da fallos


    });

    then('A confirmation message should be shown in the screen and the review comment should be added to the place', async () => {

      //TODO: check for snackbar when it is implemented
      await page.waitForSelector('span[aria-label="-1 Stars"]').then(
            () => expect(page).toMatchElement('span[aria-label="-1 Stars"]')
        )

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

