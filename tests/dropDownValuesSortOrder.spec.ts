import { test,Locator,expect } from "@playwright/test";

test('DropDown values selection Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    /* const dropdownValue:Locator =page.locator('#animals>option')

    //const sortOrder:String[]=(await dropdownValue.allTextContents()).map(text=>text.sor)

    console.log(await dropdownValue.allTextContents())

    const sortOrder:string[]=(await dropdownValue.allTextContents()).map(text=>text.trim())

    //console.log(sortOrder)

    const orignalList:string[] = sortOrder
    const sortedList:string[] = sortOrder.sort()

    console.log("OrignalList", orignalList)
    console.log("SortedList",sortedList)   */

const dropdownValues:Locator=  page.locator('#animals>option')
 // const dropdownValues:Locator=  page.locator('#colors>option')

  const allDropdownVal= (await dropdownValues.allTextContents()).map(text=>text.trim())

  console.log(allDropdownVal)

  const orignalList:string[] = [...allDropdownVal]

  const sortedList:string[] = [...allDropdownVal].sort()

  console.log("Origna List is: ", orignalList)

  console.log("Sorted list is: ", sortedList)

  expect(orignalList).toEqual(sortedList)


})