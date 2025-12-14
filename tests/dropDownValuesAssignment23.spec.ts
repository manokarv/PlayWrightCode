import {test,Locator,expect} from '@playwright/test'

test("Verify DroDown concept",async({page})=>

{
    //1. Navigate to the Webpage:
    await page.goto("https://www.bstackdemo.com/")



    /*2. Interact with the "Order by" Dropdown:
o Locate the "Order by" dropdown element.
o Verify the dropdown is displayed and enabled.
o Select the option "Lowest to highest" from the dropdown.*/


   const orderBy = page.locator('div.sort>select')

   await expect(orderBy).toBeVisible()

   await expect(orderBy).toBeEnabled()

   const allValues:string[] = await orderBy.allTextContents()

   console.log(allValues)

  //await  orderBy.selectOption({value:'lowestprice'})

  await  orderBy.selectOption({value:'highestprice'})

  await page.waitForTimeout(3000)


  /* 3. Retrieve and Print Product Information:
o Retrieve the list of product price elements.
o Retrieve the list of product name elements.
o Verify Product names and their prices count are equal.
o Print each product name along with its corresponding price in the console. */

const priceValues:Locator= page.locator('div.val')

const itemNames = page.locator('p.shelf-item__title')

const prices:string[]= await priceValues.allTextContents()

const productNames: string[]= await itemNames.allTextContents()

expect(prices.length).toBe(productNames.length)

for(let i=0;i<productNames.length;i++)
{
    console.log(`${productNames[i]}  : ${prices[i]}`)

    console.log("lowest price Product is:",`${productNames[0]}  : ${prices[0]}`)

    console.log("Highest price Product is:",`${productNames[productNames.length-1]}  : ${prices[prices.length-1]}`)

}




})