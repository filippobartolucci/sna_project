const puppeteer = require('puppeteer');
const fs = require('fs');

let url = "https://trevor.shinyapps.io/subalgebra/?ref=short-tails";

async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    // delete the default subreddits
    await page.click('#sub1');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.type('#sub1', 'AskReddit');

    // cancel subreddit 2
    await page.click('#sub2');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');


    await Promise.all([
        // wait 3 seconds
        page.waitForSelector('#DataTables_Table_0_processing', { visible: true }),
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    await page.click('#DataTables_Table_0_filter > label > input[type="search"]'),
    await page.keyboard.type('AskReddit')

}


main();