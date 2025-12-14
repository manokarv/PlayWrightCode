import { test,Locator,expect } from "@playwright/test";

test('AutoSuggest dropdown',async({page})=>
    {

        await page.goto("https://www.flipKart.com")

        await page.locator('input[name="q"]').fill("smart")

        const autoSuggestOptions= page.locator('ul>li')

        await page.waitForTimeout(5000)

       const count =await autoSuggestOptions.count()

       console.log(count)

       const allsuggestoptions:string[] = await autoSuggestOptions.allTextContents()

       console.log("all the suggested values are: ", allsuggestoptions)

    //    for(let i=0;i<count;i++)
    //    {
    //     console.log(await autoSuggestOptions.nth(i).innerText())
    //    }


    //clicking on the autosuggest option from the list

    for(let i=0;i<count;i++)
       {
         const options=await autoSuggestOptions.nth(i).innerText()

         if(options=== 'smartphone')
         {
            autoSuggestOptions.nth(i).click()

            break;
         }
        }
    })



    test.only("Verify autosuggest drop down",async({page})=>
    
    {
        await page.goto("https://www.myntra.com/")

        //await page.locator('input[data-reactid="1039"][placeholder="Search for products, brands and more"]').fill('smart')
        await page.locator('input[data-reactid="1039"]').fill('smart')

        await page.waitForTimeout(5000)

        const autosuggestion:Locator= page.locator('ul.desktop-group>li')

        await page.waitForTimeout(5000)

         const count = await autosuggestion.count()

         console.log(count)

    })