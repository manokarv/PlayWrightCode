import test from '@playwright/test'
test("Screenshot of the screen",async ({page, context})=>
{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

    await page.waitForTimeout(2000)

    const now = new Date();
   const timestamp = now.toISOString().replace(/[:.]/g, '-');


    await page.screenshot({path:`allscreenshots/Harry1${timestamp}.png`, fullPage:false})

    await page.locator('//div[@id="draggable"]').screenshot({path:`allscreenshots/myscreenshot32${timestamp}.png`})

    
//const now = new Date();
  //const timestamp = now.toISOString().replace(/[:.]/g, '-');

  // Save screenshot with timestamp in filename
  //await page.screenshot({ path: `screenshot-${timestamp}.png` });


})