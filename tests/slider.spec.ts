import test from '@playwright/test'
test("Slider movement", async ({page})=>
{

    await page.goto("https://jqueryui.com/resources/demos/slider/default.html")

    //locator for slider_handle
     const slider_handle = await page.locator('//span[@class="ui-slider-handle ui-corner-all ui-state-default"]');

     //locator for slider_tracker
     const slider_tracker = await page.locator('//div[@id="slider"]')

     //x and y coordinates
     // //bounding box

      const box = await slider_tracker.boundingBox();
      if(!box) throw new Error("Slider tracker is not found")

      let x = box.x + box?.width/2;
      let y = box.y + box?.height/2;

      //mouse action

      //mouse hover

      await slider_handle.hover();

      //mouser down
        await page.mouse.down();

        await page.waitForTimeout(2000);

        //mouse move(x,y)

        await page.mouse.move(x,y);

        //mouse up

        await page.mouse.up();






})