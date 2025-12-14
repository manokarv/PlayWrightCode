import {test, Locator, expect} from '@playwright/test'


const Searchitem:string[] = ['laptop','gift Cards','smartphone','monitor']


for(const item of Searchitem)
{
test(`Search test for ${item}`, async({page})=>
    {
        await page.goto("https://demowebshop.tricentis.com/")

        await page.locator("input#small-searchterms").fill("item")
        await page.locator("input[value='Search']").click()
        //await expect.soft(page.locator('h2 a').nth(0)).toContainText(item), {ignoreCase: true}
    })

}