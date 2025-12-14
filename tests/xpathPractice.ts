import {test,expect} from '@playwright/test'
import {Locator} from '@playwright/test'

test("xpath verification", async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/")

    const logo:Locator  = page.locator("//img[@alt='Tricentis Demo Web Shop']")

    await expect(logo).toBeVisible()

    let val:Locator= page.locator("//h2/a[starts-with(@href,'/build')]")

    const valueArray:number = await val.count()

    expect(valueArray).toBeGreaterThan(0)

    const com:Locator=page.locator("//h2/a[contains(@href,'computer')]")

const count:number = await  com.count()

 expect(count).toBeGreaterThan(0)

 console.log(com.first().textContent())
 com.nth(3).textContent()

  const textcont:string[]= await com.allTextContents()

  for(let pt of textcont)
  {
    console.log(pt)
  }
})