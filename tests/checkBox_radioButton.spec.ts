import {test,expect,Locator} from "@playwright/test";
test('Text Input Actions',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

 const textbox:Locator= page.locator('#name')

 await expect(textbox).toBeVisible()

 await expect(textbox).toBeEnabled()
   
 const maxLength:string|null= await textbox.getAttribute('maxlength')

 expect(maxLength).toBe('15')

 await textbox.fill("John Day")

 console.log("Entered value is: ",await textbox.textContent())

 console.log("Entered value is: ", await textbox.inputValue())

  const enteredValue= await textbox.inputValue()

  expect(enteredValue).toBe('John Day')

  await page.waitForTimeout(3000)


})


//Radio Buttons

test('Radio Button Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

     const maleRadiobutton:Locator= page.locator('#male')

     await expect(maleRadiobutton).toBeVisible()

     await expect(maleRadiobutton).toBeEnabled()

     expect(await maleRadiobutton.isChecked()).toBe(false)
     

     await maleRadiobutton.check()

     expect(await maleRadiobutton.isChecked()).toBe(true)

     await expect(maleRadiobutton).toBeChecked()

     await page.waitForTimeout(3000)

})

test('CheckBox Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

     // 1. Select specific checkbox (Sunday) using getByLabel and assert

     const sundaycheckBox:Locator=page.getByLabel('Sunday')

     await expect(sundaycheckBox).toBeVisible()
     await expect(sundaycheckBox).toBeEnabled()

     expect(await sundaycheckBox.isChecked()).toBe(false)

     await sundaycheckBox.check()

     await expect(sundaycheckBox).toBeChecked()

     expect(await sundaycheckBox.isChecked()).toBe(true)

     // 2. Select all checkboxes and assert each is checked

    //  const days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        
    //  const checkboxes:Locator[]= days.map(index=> page.getByLabel(index))

    // expect(checkboxes.length).toBe(7)

    const days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    const checkboxes:Locator[]= days.map(index=> page.getByLabel(index))

    expect(checkboxes.length).toBe(7)

    


    })

    test.only('CheckBox Actions for practice',async({page})=>{

    await page.goto("https://www.ironspider.ca/forms/checkradio.htm",{waitUntil:'domcontentloaded'});

    //const redcheckBox:Locator=page.getByRole('checkbox',{name:'color'})

    const redcheckBox = page.locator('//input[@value="red"]')

    //const redcheckBox =page.locator('//input[@name="color"]')

    

    await redcheckBox.check()

    await expect(redcheckBox).toBeChecked()
     expect( await redcheckBox.isChecked()).toBe(true)

     const colors: string[] = ['red','yellow','blue','orange','green','purple']

      //const checkboxes:Locator[]= colors.map(color=>page.locator(`input[name="color"]'))

      
const checkboxes = page.locator('//input[@name="color"]');
  const count = await checkboxes.count();
  expect(count).toBe(6);


      for(let i = 0; i < count; i++)
      {
      const checkbox = checkboxes.nth(i);
        await checkbox.check()
        await expect(checkbox).toBeChecked()
      }
    
})