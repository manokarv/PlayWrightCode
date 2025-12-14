import {test} from '@playwright/test';
test("handling i frame", async({page, context})=>{

    await page.goto("https://the-internet.herokuapp.com/windows");

    await page.locator('//a[text()="Click Here"]').click()

    // pages(): get all the open tabs/window

    let allTabs = await context.pages();


    //go to new Tab/last tab
    const newtab = allTabs[allTabs.length-1]

    console.log(await newtab.url())

    console.log(await newtab.title())

})


//import test from '@playwright/test'

test("handling the tabs in playwright",async ({page, context})=>
{
    await page.goto("https://the-internet.herokuapp.com/windows")

    await page.locator('//a[text()="Click Here"]').click()

    //pages() -gets all the open tabs.window
    const newtabs = await context.pages();

     const alltabs = await newtabs[newtabs.length-1]

     //console.log(await alltabs.innerText())
     console.log(await alltabs.url())
     console.log(await alltabs.title())
     console.log(await alltabs.check("New Window"))

})