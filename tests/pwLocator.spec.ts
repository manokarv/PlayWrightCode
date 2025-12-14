import {test, expect,Locator} from '@playwright/test'


test("demo on playwright locators", async ({page})=>
{
 
    await page.goto("https://demo.nopcommerce.com/")

     const logo:Locator=  page.getByAltText("nopCommerce demo store")

     await expect(logo).toBeVisible()


      // const text =page.getByText("Welcome to our store")

       await expect(page.getByText("Welcome to our store")).toBeVisible();


       page.getByRole("heading",{name:"Welcome to our store"})

       await page.getByRole("link",{name:"Register"}).click()

      await expect(page.getByRole("heading",{name:"Register"})).toBeVisible()

      await page.getByLabel("First name:").fill("Vyankatesh")

      await page.getByLabel("Last name:").fill("Raje")

      await page.getByPlaceholder("Search store").fill("Samsung")
})