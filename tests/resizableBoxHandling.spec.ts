import test from '@playwright/test'
//import { error } from 'console';
test("resizable box handlig",async ({page})=>
{
    await page.goto("https://jqueryui.com/resources/demos/resizable/default.html")

    const resizale_handle = await page.locator('//div[@id="resizable"]/div[3]')

     const box = await resizale_handle.boundingBox();

     if(!box) throw new Error("resizale_handle location is not found");
     const x = box.x + 400;
     const y = box.y + 500;

     await page.waitForTimeout(2000);

     await resizale_handle.hover();

     await page.mouse.down()

     await page.mouse.move(x,y);

     await page.mouse.up();

})

test("right click",async({page})=>
{
    await page.goto("https://deluxe-menu.com/popup-mode-sample.html")

    await page.waitForTimeout(2000);

      await page.locator('//img[@src="data-samples/images/popup_pic.gif"]').click({button:'right'})

      await page.locator('//td[text()="Product Info"]').hover();

      await page.locator('//td[text()="Dynamic Functions"]').click();
})

test("draganddrop",async({page})=>
{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    await page.waitForTimeout(2000);

    let source = await page.locator('//div[@id="draggable"]');

    let destination = await page.locator('//div[@id="droppable"]');

    //await source.dragTo(destination);

     const box = await source.boundingBox();

     if(!box) throw new Error("Source location is not found");

     const x = box.x + 500;
     const y =  box.y + 450;
     
     await source.hover();

     await page.mouse.down();

     await page.mouse.move(x,y);

     await page.mouse.up();
})