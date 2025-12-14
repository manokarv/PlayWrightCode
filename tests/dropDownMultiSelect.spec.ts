import { test,Locator,expect } from "@playwright/test";

test('DropDown values selection Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //1. select drop down option 

    //await page.locator('#colors').selectOption(['Red','Blue','Yellow'])  //using visible text

    //await page.locator('#colors').selectOption(['red','blue','white'])  //using value attribute

    //await page.locator('#colors').selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}])  //using label

   // await page.locator('#colors').selectOption([{index:0},{index:2},{index:4}])  //using index

    

    await page.waitForTimeout(3000)
   

   // 2. check number of option in the drop down(count)
    
   const dropdownValue:Locator =page.locator('#colors>option')

   await expect(dropdownValue).toHaveCount(7)
    
    //3. check an options present in the drop down.

  const optionText:string[] =(await dropdownValue.allTextContents()).map(text=>text.trim())


  console.log(optionText)

    expect(optionText).toContain('Red')
     

    //4. printing option from the drop down


    for(const allOption of optionText)
    {
        console.log(allOption)
        //expect(allOption).toContain('green')
    }

})