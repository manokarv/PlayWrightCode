import { test, expect} from '@playwright/test';

test("select language from the dropwn", async({page})=>
{
    await page.goto("https://wikipedia.org")

    //select the language by text
    let countryName = await page.locator('//select[@id="searchLanguage"]').selectOption("Shqip");

    await page.waitForTimeout(2000)

    console.log(countryName)

    //select the language by index
    let country = await page.locator('//select[@id="searchLanguage"]').selectOption({index:6});

    await page.waitForTimeout(2000)

    console.log(country)
    //select the language by using value
    await page.locator('//select[@id="searchLanguage"]').selectOption("ast")




})

test("xpath sibling test for yahoomail", async ({page})=>{

    


    await page.goto("https://www.yahoomail.com")

    await page.locator('//a[@id="createacc"]').click()

    await page.waitForTimeout(2000)

    let l1=await page.locator('(//div[@class="input-field-icon"])[2]/following-sibling::label')
    //await page.locator('//input[@id="login-username"]')

    console.log(l1.textContent);

    expect(l1).toBeVisible();


    //Xpath - Contains - //tagname[conatins(text(),"text")]
//xpath sibling - //span[text()="Password *"]/following-sibling::input
//xpath sibling - //input[@id='password']/preceding-sibling::span
})

