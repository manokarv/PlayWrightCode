import { test,Locator,expect } from "@playwright/test";

test('DropDown values selection Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");


    page.on("dialog", dialog =>{
        console.log("Dialog type is: ", dialog.type())
        console.log("dialog text",dialog.message())

        expect(dialog.type()).toContain('alert')

        page.waitForTimeout(5000)
        dialog.accept()

    })


     const alertButton= page.locator("//button[text()='Simple Alert']")


     await alertButton.click()

     await page.waitForTimeout(5000)



})

test("iFrame element access",async ({page})=>
{
    await page.goto('https://ui.vision/demo/webtest/frames/')

   const frame1 = page.frameLocator('frame[src="frame_1.html"]')

   await frame1.locator("input[name='mytext1']").fill("Hello")
})