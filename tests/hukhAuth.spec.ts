import {test,expect} from '@playwright/test'

test("Auth credential verification",async ({page})=>
{
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')

})


test("Upoading multiple documents",async ({page})=>
{
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_multiple",{waitUntil:'domcontentloaded'})

     const frame = await page.frameLocator('#iframeResult')

     await frame.locator('#files').setInputFiles(["C:/Users/vyankatesh.manokar/Downloads/Declre.jpeg","C:/Users/vyankatesh.manokar/Downloads/Declre.jpeg"])

     await frame.locator('//input[@type="submit"]').click()

      const resultText= frame.locator('//h2[text()="Your input was received as:"]')

      await expect(resultText).toContainText("Your input was received as:")

      
})  