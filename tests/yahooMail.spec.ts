import {test, expect} from "@playwright/test"
import { timeStamp } from "console"
/*test("yahoomail test case", async({page})=>
    {

        await page.goto("https://yahoomail.com/");

        await page.waitForTimeout(2000);

        await page.locator('//a[@id="createacc"]').click();

        await page.waitForTimeout(2000);

        
await page.locator('//input[@name="userId"]//preceding::input[@name="firstName"]').fill("Vyankatesh");

await page.waitForTimeout(2000)

await page.locator('//input[@name="userId"]//preceding::input[@name="lastName"]').fill("Manokar");

await page.waitForTimeout(2000)

await page.locator('//input[@name="firstName"]/following::input[@name="userId"]').fill("Vyankatesh.manokar");

await page.waitForTimeout(2000)

await page.locator('//input[@id="usernamereg-password"]').fill("Hellow@1213");

await page.waitForTimeout(2000)

await page.locator('//select[@id="usernamereg-month"]').selectOption("2")

await page.waitForTimeout(2000)

await page.locator('//select[@id="usernamereg-month"]').selectOption("March")

await page.waitForTimeout(2000)

await page.locator('//select[@id="usernamereg-month"]').selectOption({index:6})

await page.waitForTimeout(2000)

await page.locator('//select[@id="usernamereg-month"]').selectOption("10")

await page.waitForTimeout(2000)

await page.locator('//input[@id="usernamereg-day"]').fill("22")

await page.waitForTimeout(2000)

})


test("Creation of rediffmail account", async({page})=>
{
    //await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")

    
await page.goto("https://mail.rediff.com/cgi-bin/login.cgi", {
  waitUntil: 'domcontentloaded' // or 'networkidle', 'load'
});


   // await page.waitForTimeout(30000);
    
    await page.locator('//a[@title="Create new Rediffmail account"]').click()

    await page.waitForTimeout(2000);

    await page.locator('//input[@placeholder="Enter your full name"]').fill("Vyankatesh Manokar")

    await page.waitForTimeout(2000);

    await page.locator('//input[@placeholder="Enter Rediffmail ID"]').fill("OnePlus")

    await page.waitForTimeout(2000);

    //await page.locator('(//select[@class="day"]/option)[04]')

    await page.locator('//select[@class="day"]').selectOption("02")

    await page.waitForTimeout(2000);

    await page.locator('//select[@class="day"]').selectOption({index:6})

    await page.waitForTimeout(2000);    

    await page.locator('//select[@class="middle month"]/following::option').all

})
    */

test("Google search",async ({page})=>
{
    await page.goto("https://www.google.com/?safe=active&ssui=on")
    const now = new Date();
   //const timestamp = now.toISOString().replace(/[:.]/g, '-');

    const timestamp = now.toISOString().replace(/[:.]/g,'-');

     await page.getByRole("link",{name:'Gmail'}).click()

     //await expect( page.getByRole("link",{name:'Gmail'}).first()).toBeVisible()

     await page.screenshot({path:`allscreenshots/picture1${timestamp}.png`, fullPage:false})

     //await page.screenshot({path:`allscreenshots/my1${timestamp}.png`, fullPage:false})


    //await page.getByRole("button",{name:'Sign in'}).click()


    
})

test("Screenshot of the screen",async ({page, context})=>
{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

    await page.waitForTimeout(2000)

     const now = new Date()

     const timestamp = now.toISOString().replace(/[:.]/g,'-')

     await page.screenshot({path:`allscreenshots/mypicture1${timestamp}.png`, fullPage:false})




})

test("Screenshot of the screens",async ({page, context})=>
{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

    await page.waitForTimeout(2000)

     const now = new Date()

     const timestamp = now.toISOString().replace(/[:.]/g,'-')

     await page.screenshot({path:`allscreenshots/mypicture1${timestamp}.png`,fullPage:false})

     await page.locator('#draggable').screenshot({path:`allscreenshots/myname1${timestamp}.png`})

})


