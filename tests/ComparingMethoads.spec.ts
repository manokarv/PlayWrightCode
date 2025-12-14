import {test,expect,Locator} from '@playwright/test'

test("Innertext vs textcontent",async({page})=>
{

    await page.goto("https://demowebshop.tricentis.com/")

    const products:Locator= page.locator('.product-title')

    const count = await products.count()

    console.log(await products.nth(1).innerText())

     for(let i=0;i<count;i++)
     {
          //const productName:string[] = await products.nth(i).allInnerTexts()
         // const productName:string[] = await products.nth(i).allTextContents()
          const productName:string = await products.nth(i).innerText()
          //const productName:string|null = await products.nth(i).textContent()

          console.log(productName)
        }

})