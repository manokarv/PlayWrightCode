import {test,expect, Locator} from '@playwright/test'

test("css practice",async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/",{waitUntil:'domcontentloaded'})

    // await page.locator('input#small-searchterms').fill("Hello")

    // await page.locator('input.search-box-text').fill("Tshirt")


    const searchBox=  await page.locator('.search-box-text[name=q]')

    await searchBox.fill("SImple")
    expect(searchBox).toBeVisible()


    console.log("Entered input value is:",await searchBox.inputValue())

    const enteredVal = await searchBox.inputValue()

    expect(enteredVal).toBe('SImple')



})


test("Verifying the checkboxes",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const checked = page.getByRole('checkbox',{name:'sunday'})

    await checked.check()

    expect(checked).toBeChecked()

    

})


test("Verifying the radiobuttons",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const radioB= page.locator('#male')

    await expect(radioB).toBeVisible()
    await expect(radioB).toBeEnabled()
    await radioB.check()

     expect(await radioB.isChecked()).toBe(true)

    

})


test.only("Verifying all the checkboxes",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //const checked = page.getByRole('checkbox',{name:'sunday'})

     const checked = page.getByLabel('Sunday')

    //await checked.check()

    //expect(checked).toBeChecked()
    const days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

     const checkBoxes:Locator[]= days.map(index=> page.getByLabel(index))

     expect(checkBoxes.length).toBe(7)

     for(const checkbox of checkBoxes)
     {
       await checkbox.check()
       await expect(checkbox).toBeChecked()
     }

    

})

