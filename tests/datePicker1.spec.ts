import {test, expect, Locator,Page} from "@playwright/test"

async  function selectDate(targetYear:string, targetMonth:string, targetDate:string, page:Page, isFuture:boolean)
{

      while(true)
      {

        const currentMonth = page.locator('.ui-datepicker-month').textContent()
      const currentYear = page.locator('.ui-datepicker-year').textContent()


      if(await currentMonth === targetMonth && await currentYear === targetYear)

        {
            break
        }

        // if(isFuture)
        // {
        //     await page.locator('.ui-datepicker-next').click()
        // }
        // else
        //     {
        //         await page.locator('.ui-datepicker-prev').click()
        //     }

        if(isFuture)
      {
        await page.locator('.ui-datepicker-next').click()  //future
      }
      else
        {
             await page.locator('.ui-datepicker-prev').click(); //Past 

        }
           // await page.waitForTimeout(3000);
        }

         const alldates = await page.locator('.ui-datepicker-calendar td').all()

         for(let dt of alldates)
         {
            const dateText = await dt.innerText()
            
            if(dateText == targetDate)
            {
                dt.click()
                break

            }
         }
}


test("Datepicker Verification",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

     const dateInput = page.locator('input#datepicker')

      await  dateInput.click()

      await expect(dateInput).toBeVisible()


      //future target date
const year='2026';
const month='June';
const date='15';

//past target date
/*
const year='2024';
const month='June';
const date='15';
*/

selectDate(year,month,date,page,true)

const expectedDate='06/15/2026';  //mm//dd//yyyy
await expect(dateInput).toHaveValue(expectedDate);

await page.waitForTimeout(5000);

})