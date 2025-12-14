import {test,Locator,expect} from '@playwright/test'


test("Table values",async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/")

    let product:Locator= page.locator("//h2[@class='product-title']")

     let count:number= await product.count()

     for(let i=0;i<count;i++)
     {
         //let allVal:string= await product.nth(i).innerText()
            let allVal= await product.nth(i).textContent()
         console.log(allVal?.trim())
     }


      let arrayVal:string[]= (await product.allTextContents()).map(text=>text.trim())

      console.log(arrayVal)


       const productLocator:Locator[]= await product.all()

        for(let podall of productLocator)
        {
            console.log(await podall.innerText())
        }

       

})