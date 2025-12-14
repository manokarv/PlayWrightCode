import {test} from '@playwright/test';
test("handling i frame", async({page})=>{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit", {waitUntil:'domcontentloaded'});



    //await page.locator('//input[@id="fname"]').fill("Vyankatesh")

    //locate the iframe
    let frame = await page.frameLocator('//div[@id="iframewrapper"]/iframe');

    await frame.locator('//input[@id="fname"]').fill("Vyankatesh");

    await page.waitForTimeout(2000)

    await frame.locator('//input[@id="lname"]').fill("Don");
    await page.waitForTimeout(2000)

    await frame.locator('//input[@value="Submit"]').click();
    await page.waitForTimeout(2000)

    await page.locator('//button[@id="runbtn"]').click();
    await page.waitForTimeout(2000)




})

//iframe

test("handling iframe", async({page})=>
    {

     await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit",{waitUntil:'domcontentloaded'})

     let frame = await page.frameLocator('//div[@id="iframewrapper"]/iframe')

     await frame.locator('//input[@id="fname"]').fill("Vyankatesh")
     await page.waitForTimeout(2000)

     await frame.locator('//input[@id="lname"]').fill("Manokar")
     await page.waitForTimeout(2000)

     await frame.locator('//input[@value="Submit"]').click()
     await page.waitForTimeout(2000)

     await page.locator('//button[@id="runbtn"]').click()
     await page.waitForTimeout(2000)
})

test("handling iframes verification", async({page})=>
    {

     await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit",{waitUntil:'domcontentloaded'})

      const frame = await page.frameLocator('//div[@id="iframewrapper"]/iframe')
      frame.locator('//input[@id="fname"]').fill("Hello")
    })