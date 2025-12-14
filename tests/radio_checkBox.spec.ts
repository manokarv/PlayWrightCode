import {test,expect,Locator} from '@playwright/test'
test("Text  Input actions",async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/")

     const name:Locator = page.locator("#name")

     await expect(name).toBeVisible()
     await expect(name).toBeEnabled()

      const maxlength:string|null= await name.getAttribute("maxlength")


      console.log(maxlength)

       expect(maxlength).toBe('15')

       await name.fill("John")

       console.log(await name.inputValue())

 })
 
 
 //Radio buttons
test.only("radio button", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
       let radioB:Locator=page.locator("#male")

      await expect(radioB).toBeVisible()
       await expect(radioB).toBeEnabled()
            expect(await radioB.isChecked()).toBe(false)
       //await expect(radioB).toBeChecked()

       await radioB.check()

       await expect(radioB).toBeChecked()


})

test.only("radio buttons", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")


    //select specific check box
     const sundayCheckBox:Locator= page.getByLabel("Sunday")

     await sundayCheckBox.check()

     await expect(sundayCheckBox).toBeChecked()

     //select multiple check boxes

     let checkboxes:string[] = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

      let newcheckbox:Locator[]= checkboxes.map(index =>page.getByLabel(index))

       for(const  checks of newcheckbox)
       {
     await checks.check()
        //console.log(checks)
     }

     for(const  checks of newcheckbox.slice(-3))
      {
        await checks.uncheck()
        //console.log(checks)

        await expect(checks).not.toBeChecked()
      }


      for(const  checks of newcheckbox)
      {
        if(await checks.isChecked())
        {
            await checks.uncheck()
                await expect(checks).not.toBeChecked()
            
        }
        else
            {
                 await checks.check()
            await expect(checks).toBeChecked()
            }
       

        
      }




})


test.only("dropdown Values", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")


     /* let dropVal:Locator= page.locator("//select[@id='country']//option")

     let count:number = await dropVal.count()


     console.log(count)

     console.log(await dropVal.allTextContents())

     const allValues:string[]= (await dropVal.allInnerTexts()).map(text=>text.trim())

     console.log(allValues)

     for(let option of allValues)
     {
        console.log(option)
     } */


     await page.locator("//select[@id='country']").selectOption('Canada')
     await page.locator("//select[@id='country']").selectOption({value:"uk"})
     await page.locator("//select[@id='country']").selectOption({label:"France"})
     await page.locator("//select[@id='country']").selectOption({index:3})


     await  page.locator("#colors").selectOption(['Red','Blue'])
     
     await  page.locator("#colors").selectOption(['White','Green'])
     
     await  page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'}])

     
     await  page.locator("#colors").selectOption([{index:0},{index:1},{index:3}])

     const valuesDrop:Locator= page.locator("#colors option")

     let count:number=await valuesDrop.count()

     await expect(valuesDrop).toHaveCount(7)


     let allValues:string[] =(await  page.locator("#colors option").allTextContents()).map(text=>text.trim())

     console.log(allValues)


     for(let all of allValues)
     {
        console.log(all)
     }
})

test.only("sortlist Values", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let list:Locator= page.locator("//select[@id='animals']//option")

    console.log(await list.allTextContents())


   let listmap: string[]= (await list.allTextContents()).map(text=>text.trim())

   console.log(listmap)

})