// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

//let arr:number[] = [12,34,65,78,5]

// let sum=0

// for(let i of arr)
// {
//   sum=sum + i;

  
// }
// console.log("sum of the array element is: ", sum)

//arr.forEach((val , index)=>{
//   console.log(val  , index)
// })


let arr1:number[][] = [[12,34,65,78,5],[43,343,343,34,54]]
for(let i =0; i<arr1.length;i++)
{
  for(let j=0;j<arr1[0].length;j++)
  {
    console.log(arr1[i][j])
  }
}