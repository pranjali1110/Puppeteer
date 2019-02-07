const puppeteer = require('puppeteer');
async function run()
{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    page.goto('https://www.google.com');
}
run();