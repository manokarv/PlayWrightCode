
import test from '@playwright/test'
test("MouserHover functionality",async ({page})=>
{
    await page.goto("https://www.ebay.com/")

    await page.locator('(//a[text()="Motors"])[1]').hover();

    await page.waitForTimeout(2000)
    await page.locator('//a[text()="Tools and supplies"]').click();

})

test("Slider movement checking",async ({page})=>
{

    await page.goto("https://jqueryui.com/resources/demos/slider/default.html")

    const slide_handle = await page.locator('//span[@class="ui-slider-handle ui-corner-all ui-state-default"]');

    const slide_tracker = await page.locator('//div[@id="slider"]');

     const box = await slide_tracker.boundingBox();

     if(!box) throw new Error("slider tracker co-ordinates are not found");
     //const x = box?.x + box?.width/2;
     //const y = box?.y + box?.height/2;

     const x = 68;
     const y = 98;
     await page.waitForTimeout(2000);

     await slide_handle.hover();

        await page.mouse.down();

        await page.mouse.move(x,y);

        await page.mouse.up();

        
})