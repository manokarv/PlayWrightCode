import test from '@playwright/test'
test("Handling dialogue or java script alert",async ({page})=>
{

    //add the listner code
    //page.on() - event listner
    //dialog- it is an event triggered whenever page shows javascript alert

    // page.on('dialog', async dialog=>{

    //     await page.waitForTimeout(2000)

    //     console.log(dialog.message())

    //     dialog.accept
    // })

    page.on('dialog', async dialog=>
        {
            await page.waitForTimeout(2000)

            console.log(dialog.message())
            console.log(dialog.defaultValue())

           // dialog.accept()

           dialog.dismiss()

           //dialog.type()
        })
await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")

await page.locator('//button[text()="Log In"]').click()


})

test("Handling dialogue box or java script alerts",async ({page})=>
{
    page.on('dialog', async dialog=>
        {

        console.log(dialog.message());
        console.log(dialog.defaultValue());
        dialog.dismiss();


    })

    //await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")

    //await page.locator('//button[text()="Log In').click()

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")

await page.locator('//button[text()="Log In"]').click()

await page.waitForTimeout(2000)

})

test("dialogue box Handling or alerts of java script ",async ({page})=>
{
    page.on('dialog', async dialog=>
    {
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        dialog.dismiss();
    })

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")

    await page.locator('//button[text()="Log In"]').click();

    await page.waitForTimeout(2000)
})

test("NewTabs Handling",async ({page, context})=>
{
    await page.goto("https://the-internet.herokuapp.com/windows")

    await page.locator('//a[text()="Click Here"]').click()

     const newtab = await context.pages();

        const alltab = await newtab[newtab.length-1]

        console.log(await alltab.url())
        console.log(await alltab.title())
        //console.log(await alltab.content());


})

//new tab/window
test("Tabs Handling",async ({page, context})=>
{
    await page.goto("https://the-internet.herokuapp.com/windows")

    await page.locator('//a[text()="Click Here"]').click()
    
    const newtabs = await context.pages();

     const alltabs = await newtabs[newtabs.length-1]

     console.log(await alltabs.url());
     console.log(await alltabs.title())

     await page.waitForTimeout(2000)
     //console.log(alltabs.click())
     alltabs.close();

     


     console.log(alltabs.isClosed());
     
})

//dialog
test("Handling of dialog", async({page})=>
{
    page.on('dialog', async dialog=>
    {
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        dialog.accept()

    }
    )

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")

    await page.locator('//button[text()="Log In"]').click();

    await page.waitForTimeout(2000)
})