import {test,expect, Locator} from "@playwright/test"

test("Verify the check box selection", async({page})=>
{
    await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php")

    await page.waitForTimeout(2000)

    await page.locator('(//div[@class="display"])[1]//input').nth(1).click()

    let checkBoxChecked = await page.locator('(//div[@class="display"])[1]//input').nth(1).isChecked()

    console.log(checkBoxChecked)
})
