import test from "@playwright/test"
test("check the functionality of the Contains method", async({page})=>
{
    await page.goto("https://www.facebook.com/")

    await page.locator('//input[contains(@data-testid, "email")]').fill("Vyankatesh")

      await page.locator('//li[contains(text(),"English")]').click()

    

    
    })