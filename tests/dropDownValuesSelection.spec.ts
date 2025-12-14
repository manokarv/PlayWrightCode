import { test,Locator,expect } from "@playwright/test";

test('DropDown values selection Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");


    //1. select drop down option 
    await page.locator('#country').selectOption('india')  // by using visible text
    await page.locator('#country').selectOption({value:'uk'})  //by using value attribute
    await page.locator('#country').selectOption({label:'India'})  //by using label
    await page.locator('#country').selectOption({index:3})// by using index


   // 2. check number of option in the drop down(count)

    const dropdownV:Locator= page.locator('#country>option')

    await expect(dropdownV).toHaveCount(10)

    //3. check an options present in the drop down.

     const allOptions:string[] = (await dropdownV.allTextContents()).map(text=>text.trim())

     console.log(allOptions)
    expect(allOptions).toContain('Japan')


    //4. printing option from the drop down

    for(const allValues of allOptions)

        {
            console.log("Drop down values are: ",allValues)
        }

})