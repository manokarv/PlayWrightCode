import {test,expect,Locator} from '@playwright/test'

test("Statical table verification", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const table:Locator = page.locator('table[name="BookTable"] tbody')

    await expect(table).toBeVisible()

    //1.count number of rows in a table

     const rows:Locator = page.locator('table[name="BookTable"] tbody tr')

     await expect(rows).toHaveCount(7)

      const count:number= await rows.count()

      await expect(count).toBe(7)

      //2. count the number of column/headers

      //page.locator('table[name="BookTable"] tbody tr th')  - this is one way or

       const columns:Locator = rows.locator("th")


        await expect(columns).toHaveCount(4)


        const columncount = await columns.count()

        console.log(columncount)

      //3. read the data from the 2nd row

      const secondrowCell:Locator=rows.nth(5).locator('td')

      //console.log(secondrowCell)
         const secondrow:string[]= await secondrowCell.allInnerTexts()   
         
         console.log(secondrow)

         for(let rowPrint of secondrow)
         {
            console.log(rowPrint)
         }


         const allrows =await rows.all()

         for(let rowsPrint of allrows)
         {
             const cols:string[]= await rowsPrint.locator('td').allInnerTexts()
             console.log(cols.join('\t'))

         }




})