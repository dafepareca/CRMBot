const puppeteer = require('puppeteer')

const isDebug = true;
(async () => {
  var busqueda = 'bombillos';
  //Configuración browser inicial
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox'],
    slowMo: isDebug ? 100 : 5,
    defaultViewport: {
      width: 1200,
      height: 768
    }
  });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  
  await page.goto('https://www.alkosto.com/');
  await page.type('#search', busqueda);
  await page.waitFor(200);
  await page.waitForXPath("//*[@id='searchSubmit']");
  const [btnBuscar] = await page.$x("//*[@id='searchSubmit']");
  await btnBuscar.click({clickCount: 1, delay: 100});
  //flujoBot();

  debugger;
})();
