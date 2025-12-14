import test, { expect } from "@playwright/test";

test('Test Practice', async ({page})=>
{
    await page.goto("https://www.google.com")

    await page.waitForTimeout(2000)

       let fetchTitle = await page.title();

       let storedTitle = "Google";

       expect(fetchTitle).toContain(storedTitle);
})