import {test,expect, Locator} from '@playwright/test'

test("Verify css selector",async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/")

//     const searchbox:Locator=page.locator("input#small-searchterms")

//     expect(searchbox).toBeVisible()
//    await  searchbox.fill("Tshirt")

//tag.class
//await page.locator("input.search-box-text").fill("Hello")


//tag with any other attribute
//page.locator("input[name=q]").fill("hello")

page.locator("input.search-box-text[placeholder='Search store']").fill("Hello")

await page.waitForTimeout(3000)

})

test("xpath Finder",async ({page})=>
{
    await page.goto("https://login.yahoo.com/account/create?.intl=in&.lang=en-IN&src=ym&activity=mail-direct&pspid=159600001&add=1&done=https%3A%2F%2Fmail.yahoo.com%2Fd%3F.lang%3Den-IN&specId=yidregsimplified")

    const fname = page.getByRole('textbox',{name:"First name"})

    expect(fname).toBeVisible()

    fname.fill("Hello")

    await page.waitForTimeout(5000)

    const nextButton =  page.getByRole("button",{name: "Next"})

    await expect(nextButton).toBeVisible();

   await nextButton.click()

})

test("wiki values", async({page})=>
{
    await page.goto("https://www.wikipedia.org/")

    await page.locator('//select[@id="searchLanguage"]').selectOption("Shqip")

    await page.waitForTimeout(3000)

    await page.locator('//select[@id="searchLanguage"]').selectOption({index:5})

    await page.waitForTimeout(3000)

    await page.locator('//select[@id="searchLanguage"]').selectOption("ast")

    await page.waitForTimeout(3000)


})

test("rediffmailValues", async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

    await page.locator('//select[@class="day"]').selectOption("02")

    await page.locator('//select[@class="middle month"]').selectOption({index:4})

    let allYears = await page.locator('//select[@class="year"]/option').all()

    console.log("Total number of Year values are ",allYears.length)

    for(let i of allYears)
    {
        console.log(await i.textContent())
    }

    let allMonths = await page.locator('//select[@class="middle month"]/option').all()

    console.log("Total number of month values are ",allMonths.length)

    for(let i of allMonths)
    {
        console.log(await i.textContent())
    }
})


test("wiki all values", async({page})=>
{
    await page.goto("https://www.wikipedia.org/")

    await page.locator('//select[@id="searchLanguage"]').selectOption("Shqip")

     let allLanguage = await page.locator('//select[@id="searchLanguage"]/option').all()

     console.log(allLanguage.length)

     for(let i of allLanguage)
     {
        console.log(await i.textContent())
     }
    })

    test("Trending News",async({page})=>
    {
        await page.goto("https://in.search.yahoo.com/?fr2=inr")

         //let allNews = page.locator('//div[@class="layoutMiddle"]//li').all()
         const  allNews = page.locator('//div[@class="layoutMiddle"]//a').all()

         console.log((await allNews).length)

         for(let i of await allNews)
         {

            const text =await i.textContent()

            if(text?.includes("India"))
            {
                console.log(text)
            }
//             else
//             {
//                 console.log("Entered news not available")
// }

            
            //console.log("Entered news not available")
        }
            //console.log("Entered news not available")

            //console.log(await i.textContent())
    })


    test("wiki all values in a list", async({page})=>
{
    await page.goto("https://www.wikipedia.org/")

     const allLang = page.locator('//select[@id="searchLanguage"]/option').all()

     console.log((await allLang).length)

     for(let i of await allLang)
     {
        console.log(await i.textContent())

         //const text = i.textContent()

         
     }



})

test("Google Search",async({page})=>
{
    await page.goto("https://www.google.com/?safe=active&ssui=on")

    await page.locator('//textarea[@name="q"]').fill("hello world")

    await page.waitForTimeout(3000)

     const allVal = await page.locator('//div[@id="Alh6id"]//li').all()

     console.log("Total values are:" ,allVal.length)

     for(let i of allVal)
     {
        console.log(await i.textContent())
     }


})


//import {test} from '@playwright/test';

test("handling check boxes",async({page})=>
    {

    await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");

    //await page.locator('((//div[@class="display"])[1]/input)').nth(2).click()

    await page.waitForTimeout(2000)

    await page.locator('((//div[@class="display"])[1]/input)').nth(3).click()

    await page.waitForTimeout(2000)

   let result = await page.locator('((//div[@class="display"])[1]/input)').nth(3).isChecked()

   console.log(result)


})