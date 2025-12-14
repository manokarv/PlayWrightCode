import {test,Locator,expect} from '@playwright/test'
 test("xpath finding", async({page})=>
{
    await page.goto("https://www.w3schools.com/html/html_tables.asp")

     const germanyCells:Locator= page.locator("//td[text()='Germany']/self::td")

     await expect(germanyCells).toHaveText("Germany")

      const trParent:Locator = page.locator("//td[text()='Germany']/parent::tr")

      await expect(trParent).toContainText("Maria Anders")

      console.log(await trParent.allTextContents())


       const trcount:Locator= page.locator("//table[@id='customers']//tr[3]/child::td")

       await expect(trcount).toHaveCount(3)

       console.log(await trcount.allTextContents())

})