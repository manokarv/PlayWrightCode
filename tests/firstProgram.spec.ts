import { test, expect } from '@playwright/test';
test("fetch the title",async({page})=>
{
        await page.goto("https://www.google.com");

        //fetch the title
        let fetchTitle = await page.title();
        console.log(fetchTitle);

        //stored the title

        let storedTitle="Google";

        //Compare the title
        expect(fetchTitle).toContain(storedTitle);
}
)

test("Facebook sending inputs", async ({page})=>
{
    await page.goto("https://www.facebook.com")

    //send the text in the username and password

    await page.locator("#email").fill("Vyankatesh Manokar");

})
test("Facebook value check", async ({page})=>
{
    await page.goto("https://www.google.com")

    let fetchTitle = await page.title();
    console.log(fetchTitle);

    await page.locator('//textarea[@id="APjFqb"]').fill("Sale");
    await page.keyboard.press('Enter');

})


test("Launch the URL and fetch the TItle", async ({page})=>
{
        await page.goto("https://www.facebook.com/");

        //etch the page title
        let fetchDetail = await page.title();

        console.log(fetchDetail);

        //stored the title

        let storedTitle = "facebook";
        
        //checking using with condition

        if(fetchDetail === storedTitle)
        {
            console.log("Title is matching");
        }
        else
            {
               console.log("Title is not matching");  
            }
            // enter userName
            await page.locator('//input[@id="email"]').fill("vyankatesh manokar");
            //await page.locator('//input[@id="email"]').fill("vyankatesh manokar");

            //Enter password
            await page.locator('//input[@id="pass"]').fill("Hello@123");

            //Cllick on login
            await page.locator('//button[@name="login"]').click();




           // await page.locator('//li[text()="English (UK)"]').click();

})//Xpath - Contains - //tagname[conatins(text(),"text")]
//xpath sibling - //span[text()="Password *"]/following-sibling::input
//xpath sibling - //input[@id='password']/preceding-sibling::span