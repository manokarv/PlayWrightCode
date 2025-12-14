import {test,expect, Locator} from '@playwright/test'

test("Verfiying getByAltText using elements",async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/")

     const text:Locator = page.getByAltText('nopCommerce demo store')
})