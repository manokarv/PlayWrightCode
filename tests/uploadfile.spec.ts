import test from '@playwright/test'
test("Verify upload file functionality",async({page, context})=>
{
    await page.goto("https://www.way2automation.com/way2auto_jquery/registration.php#load_box")

   await page.locator('//input[@type="file"]').setInputFiles(["C:/Users/vyankatesh.manokar/Downloads/Declre.jpeg"]);
    //await page.locator('//input[@type="file"]').setInputFiles("C:/Users/vyankatesh.manokar/Downloads/PIR_9278.png");




})

//import {test} from '@playwright/test';
test("uploading multiple files", async({page, context})=>{
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_multiple", {waitUntil:'domcontentloaded'});

    

})