const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--window-size=425,1411"],
    });

    const page = await browser.newPage();
    const iphone = puppeteer.devices["iPhone X"];
    await page.emulate(iphone);
    await page.goto("https://express.farmville.com/");
    await page.waitForNavigation();
    const bntGoFB = await page.waitForXPath(
        "/html/body/div[3]/table[2]/tbody/tr[3]/td/div[1]/div[2]/ul/li/div/div[1]/div/img"
    );
    await bntGoFB.click();

    await page.waitForNavigation();
    const inputEmail = await page.waitForXPath(
        "/html/body/div[1]/div/div[3]/div[1]/div/div[2]/div/form/div[4]/div/div[1]/input"
    );
    await inputEmail.type("MyEmail");

    const inputPass = await page.waitForXPath(
        "/html/body/div[1]/div/div[3]/div[1]/div/div[2]/div/form/div[4]/div/div[2]/div/div/div[1]/div/input"
    );
    await inputPass.type("MyPassword");

    const bntLogin = await page.waitForXPath(
        "/html/body/div[1]/div/div[3]/div[1]/div/div[2]/div/form/div[5]/div[1]/button"
    );
    await bntLogin.click();

    await page.waitForNavigation();

    const bntConfirm = await page.waitForXPath(
        "/html/body/div/div/div[3]/div/div[1]/form/div/div/div[2]/footer/div/div/button"
    );
    await bntConfirm.click();
})();
