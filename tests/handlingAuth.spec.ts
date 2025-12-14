import {test} from '@playwright/test';
test("handling auth", async({page})=>{
    //await page.goto("https://the-internet.herokuapp.com/basic_auth");


    //send the username & password while hitting the URL
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    console.log(await page.title())


})