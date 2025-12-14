
import test from "@playwright/test"

test("1Handling web table",async ({page})=>
{
    await page.goto("https://money.rediff.com/gainers")

    //await page.waitForTimeout(2000)

    let allCompanies = await page.locator('//table[@class="dataTable"]/tbody/tr/td[1]').all();

    let allCurrentPrices = await page.locator('//table[@class="dataTable"]/tbody/tr/td[4]').all();

    for(let i=0;i<allCompanies.length;i++)
    {
        //await page.waitForTimeout(2000)
        //await page.waitForTimeout(2000)
        if(await allCompanies[i].textContent()==="Natura Hue Chem")
        {
            console.log(await allCurrentPrices[i].textContent());
        }

    }

    // for(let i=0;i<allCompanies.length;i++)
    // {
    //     //console.log(await allCompanies[i].textContent())

                
    //     const companyName = await allCompanies[i].textContent();
    //     const currentPrice = await allCurrentPrices[i].innerText();
    //     console.log(`${companyName} - ${currentPrice}`);

    // }
}
)


test("handling web table from the website",async({page})=>
{
    await page.goto("https://money.rediff.com/gainers");

    //fetch all the companies
    let allComapnies=await page.locator('//table[@class="dataTable"]/tbody/tr/td[1]').all();

    //fetch all the current prices
    let allCurrentPrices= await page.locator('//table[@class="dataTable"]/tbody/tr/td[4]').all();

    for(let i=0;i<allComapnies.length;i++)
    {
        if(await allComapnies[i].textContent()==="Natura Hue Chem")
        {
            console.log(await allCurrentPrices[i].textContent());
        }
    }


}

)
