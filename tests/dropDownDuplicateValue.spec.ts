import { test,Locator,expect } from "@playwright/test";

test('DropDown values contains duplicate values',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdownValues:Locator=  page.locator('#colors>option') //having duplicate values in the drop down

    //const dropdownValues:Locator=  page.locator('#animals>option')  //not having duplicate values in the drop down


    const optionText:string[] =(await dropdownValues.allTextContents()).map(text=>text.trim())

    const myset = new Set<string>()

    const duplicate:string[] = []

    for(const text of optionText)
    {
        if(myset.has(text))
        {
            duplicate.push(text)
        }
        else
        {
            myset.add(text)

        }
    }

    console.log("All unique values in set are: ",myset)

    console.log("All duplicate values in the array are: ",duplicate)

    



})