import {test,expect, Locator} from "@playwright/test"

test("Verify the check box selection", async({page})=>
{
    await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php")

    await page.waitForTimeout(2000)

    await page.locator('(//div[@class="display"])[1]//input').nth(1).click()

    let checkBoxChecked = await page.locator('(//div[@class="display"])[1]//input').nth(1).isChecked()

    console.log(checkBoxChecked)
})


test("handling web table",async({page})=>
{
    await page.goto("https://money.rediff.com/gainers");

    //fetch all the companies

     let allCompamies = await page.locator('//table[@class="dataTable"]/tbody/tr/td[1]').all()

      let allPrices= await page.locator('//table[@class="dataTable"]/tbody/tr/td[4]').all()

      for(let i=0;i<allCompamies.length;i++)
      {
        if(await allCompamies[i].textContent() ==="Tierra Agrotech")
        {
            console.log(allPrices[i])

        }
      }
})

test("Verify Slider moving functionality",async ({page})=>
{
    await page.goto("https://jqueryui.com/resources/demos/slider/default.html")

     let scrollHandle = await page.locator('//span[@class="ui-slider-handle ui-corner-all ui-state-default"]')

      let scrollBar = await page.locator('//div[@id="slider"]')

       const box = await scrollBar.boundingBox()
       if(!box) throw new Error("slider track/bar not found");


      let x = box?.x+ box?.width/2;
      let y= box?.y + box?.height/2


      await scrollBar.hover()
      await  page.mouse.down()
      await page.mouse.move(x,y)
      await page.mouse.up()

})


test("Verify the resize functinality",async({page})=>
{
    await page.goto("https://jqueryui.com/resources/demos/resizable/default.html")

     const sHandle = await page.locator('//div[@class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"]')

      const box= await sHandle.boundingBox()

      if(!box) throw new Error("Sliide Handle not found")
        let x = box.x + 456
        let y = box.y + 454

            await sHandle.hover()
            await page.mouse.down()

            await page.mouse.move(x,y)
            await page.mouse.up()

    })


    //import {test} from '@playwright/test';
test("drag and drop",async({page})=>{

   await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

   const source = page.locator('//div[@id="draggable"]')

    const destination = page.locator('//div[@id="droppable"]')

    await page.waitForTimeout(5000)

    await source.dragTo(destination)
})

test("right click",async({page})=>{
    
    await page.goto("https://deluxe-menu.com/popup-mode-sample.html");

     const image = page.locator('//img[@src="data-samples/images/popup_pic.gif"]')

     await image.click({button:"right"})

     await page.locator('//td[text()="Product Info"]').hover()

     await page.locator('//td[text()="Parameters Info"]').click()

      const text = page.locator('//strong[text()="Menu Javascript Parameters"]')

      expect(text).toBeVisible()



})

test("Event listner",async ({page})=>
{
    page.on("dialog", async dialog =>
        {
            await page.waitForTimeout(5000)
            console.log(dialog.message())
            dialog.accept()

        })
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")

    await page.locator('//button[text()="Log In"]').click()

    await page.close()
} )


test("iframe",async ({page})=>
{
    
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit",{waitUntil:'domcontentloaded'})
    //await page.waitForTimeout(30000)


    let frame =  page.frameLocator('#iframeResult')

      await frame.locator('//input[@id="fname"]').clear()

     await frame.locator('//input[@id="fname"]').fill("Sachin")

    await frame.locator('//input[@id="lname"]').fill("joe")

    await frame.locator('//input[@type="submit"]').click()
})



test("iframe interaction", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit", {
    waitUntil: 'domcontentloaded'
  });

  const frame = page.frameLocator('#iframeResult');

  await frame.locator('input#fname').clear();
  await frame.locator('input#fname').fill("Sachin");
  await frame.locator('input#lname').fill("Joe");
  await frame.locator('input[type="submit"]').click();
});


test("Iframe elements access",async ({page})=>
{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit")

    const frames = page.frameLocator('#iframeResult')

    await frames.locator('#fname').fill("sachin")

    await page.waitForTimeout(3000)

    await frames.locator('#lname').fill("Tendulkar")

    await page.waitForTimeout(3000)

   const submitButton = await frames.locator('//input[@type="submit"]')

  await submitButton.click()

  await page.waitForTimeout(3000)

    await page.locator('//button[@id="runbtn"]').click()

    expect(submitButton).toBeVisible()




})


test("handling i frame", async({page, context})=>{
    await page.goto("https://the-internet.herokuapp.com/windows", {waitUntil:'domcontentloaded'});

    await page.locator('//a[text()="Click Here"]').click()

    await page.waitForTimeout(3000)
    await page.locator('//a[text()="Click Here"]').click()

     const alltabs = await context.pages()

      const newTab= alltabs[alltabs.length-1]

      const mainTab = await alltabs[0]
      const firstTab = alltabs[1]
      const secondTab = alltabs[2]

      console.log(mainTab.url())
       await page.waitForTimeout(3000)

      console.log(firstTab.url())
       await page.waitForTimeout(3000)
      //console.log(secondTab.url())

      console.log(alltabs.length)

      console.log(await newTab.url())
      console.log(await newTab.title())

      console.log(await newTab.innerText)


})
