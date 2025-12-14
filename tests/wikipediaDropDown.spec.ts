import test from "@playwright/test"
import { text } from "stream/consumers";

test("Find all the values from the drop down", async ({page})=>
{
await page.goto("https://wikipedia.org")

    //select the language by text
    await page.locator('//select[@id="searchLanguage"]')

    await page.waitForTimeout(2000);

    const countryValues = await page.locator('//select[@id="searchLanguage"]/option').all()

    console.log("Total number of countries: " + countryValues.length)

    for(let i of countryValues)
    {
          let text = await i.innerText()

          console.log(text?.trim())
    }
// await page.waitForSelector('//select[@id="searchLanguage"]');

//   // Get all <option> elements inside the dropdown
//   const countryOptions = await page.locator('//select[@id="searchLanguage"]/option').all();

//   console.log("Total number of countries: " + countryOptions.length);

//   for (const option of countryOptions) {
//     const text = await option.textContent(); // Await the function call
//     console.log(text?.trim()); // Trim to remove extra whitespace
//   }




    // // console.log(countryName.length)

    // // for(let i of countryName)
    // // {
    // //     console.log(i.textContent);

    // //     let text = await i.textContent();
    // //     if(text?.includes("ast"))
    // //     {
    // //         console.log(text)
    // //     }

    // }
})

//import { test } from "@playwright/test";

test("Dropdown Values", async ({page}) => 
    {
  await page.goto("https://wikipedia.org");

  // Wait for the dropdown to be visible
  await page.waitForSelector('//select[@id="searchLanguage"]');

  // Get all <option> elements inside the dropdown
  const countryOptions = await page.locator('//select[@id="searchLanguage"]/option').all();

  console.log("Total number of countries: " + countryOptions.length);

  for (const option of countryOptions) {
    const text = await option.textContent(); // Await the function call
    console.log(text?.trim()); // Trim to remove extra whitespace
  }
});

test("Print the Trending New and check wheather New contains Trump related new", async ({page})=>
    {
        
                            await page.setViewportSize({ width: 1920, height: 1080 });
                            
        try {
            await page.goto("https://www.ndtv.com/trends/",{timeout:10000})
            } catch (error) 
            {
                console.error("Page took too long to load:", error);
                    // Optionally retry or skip the test
                   // await page.setViewportSize({ width: 1920, height: 1080 });
                        
                
                }

                 //let newTrending = await page.locator('//div[@class="Trn-all_tb"]//li').all()

                 const newsTrending = await page.locator('//div[@class="Trn-all_tb"]//li//h3');

                   const count = await newsTrending.count();

                   console.log(`Total Trening New items are : ${count}`);


                 
//const newsItems = await page.locator('//div[@class="Trn-all_tb"]//li//a');

  //const count = await newsItems.count();
  //console.log(`Total trending news items: ${count}`);

  let foundTrumpNews = false;


                 for(let i=0; i < count;i++)
                 {
                     const text = await newsTrending.nth(i).textContent();

                     if(text)
                     {
                        const header = text.trim();
                        console.log(header );
                        console.log(""); 

                        if(header.includes("Trump"))
                        {
                            foundTrumpNews =true;
                            console.log("Found Trump related News-");
                        }
                        else
                            {
                                console.log("Trump related news are not in the trending")
                            }
                     }

                 }


                })

    

test("Print Trending News and check for Trump-related news", async ({ page }) => {
  try {
    await page.goto("https://www.ndtv.com/trends/", { timeout: 10000 });
  } catch (error) {
    console.error("Page took too long to load:", error);
    return;
  }

  // Get all trending news items
  //const newsItems = await page.locator('//div[@class="Trn-all_tb"]//li//a');
  const newsItems = await page.locator('//div[@class="Trn-all_tb"]//li//h3');

  const count = await newsItems.count();
  console.log(`Total trending news items: ${count}`);

  let foundTrumpNews = false;

  for (let i = 0; i < count; i++) {
    const text = await newsItems.nth(i).textContent();
    if (text) {
      const heading = text.trim();
      console.log(heading);

      if (heading.includes("Trump")) {
        foundTrumpNews = true;
        console.log("✅ Found Trump-related news!");
      }
    }
  }

  if (!foundTrumpNews) {
    console.log("❌ No Trump-related news found.");
  }
});

test("select language from the drop down", async ({page})=>
{
    await page.goto("https://wikipedia.org")

    //select the language based on text
    await page.locator('//select[@id="searchLanguage"]').selectOption('Shqip');

    await page.waitForTimeout(2000);

    //select the language based on index
    await page.locator('//select[@id="searchLanguage"]').selectOption({index:3});

    await page.waitForTimeout(2000);

    //select the language based on value
    await page.locator('//select[@id="searchLanguage"]').selectOption("ast");
    
})

test("select all language from the drop down of the language", async ({page})=>
{
    await page.goto("https://wikipedia.org")

     let allLanguage = await page.locator('//select[@id="searchLanguage"]/option').all()

     console.log("The Total number of languages are: " + allLanguage.length);


     for(let i of allLanguage)
     {
        console.log(await i.textContent())
     }
})

test("Find the trending news from the yahoo site", async ({page})=>
{
    await page.goto("https://in.search.yahoo.com/?fr2=inr")

      let trendingNews = await page.locator('//div[@class="layoutMiddle"]//a').all()

      console.log("Total number of news in trending " + trendingNews.length)

      for(let i of trendingNews)
      {
         let text = await i.textContent();

         if(text?.includes("Sonammm"))
         {
            console.log(text)
         }  else 
      {
         console.log(text)
      }
      }
    

})

test("Google auto suggest", async({page})=>
{
    await page.goto("https://www.google.com")

    await page.waitForTimeout(2000)

    await page.locator('//textarea[@name="q"]').fill("hello world")

    await page.waitForTimeout(2000)

    //print all the auto suggest

   let allAutoSuggest = await page.locator('//div[@id="Alh6id"]//li').all();

   for (let i of allAutoSuggest)
   {
    console.log(await i.allInnerTexts())
   }


})

test("autoSuggest in google", async({page})=>
{
    await page.goto("https://www.google.com")

    await page.waitForTimeout(2000)

    await page.locator('//textarea[@id="APjFqb"]').fill("Movie")

    await page.waitForTimeout(2000)
     
     let allSuggestion = await page.locator('//div[@id="Alh6id"]//li').all()

     console.log("Total number of auto suggestions are: " + allSuggestion.length)


     for(let i of allSuggestion)
     {
        const text = await i.allInnerTexts();

        console.log(text);
     }

     await page.close()

     
})

test("rediffmail registration",async({page})=>
{
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")

    await page.waitForTimeout(2000)

    await page.locator('//a[text()="Get a new Rediffmail ID"]').click()

    await page.waitForTimeout(2000)

     let pageText = await page.locator('//h2[text()="Create a Rediffmail account"]')

      const text = await pageText.textContent()

     if(text === 'Create a Rediffmail account')
     {
        console.log("Rediffmail registration page gets opened")

     }
     else
     {
        console.log("Rediffmail registration page has not opened")

     }

     await page.locator('//input[@placeholder="Enter your full name"]').fill("Vyankatesh Manokar")

     await page.locator('//input[@placeholder="Enter Rediffmail ID"]').fill("Vyankateshmanokar")

     await page.locator('//select[@class="day"]').selectOption({index:4})

     await page.locator('//select[@class="middle month"]').selectOption('05')

     await page.locator('//select[@class="middle month"]').selectOption("OCT")

     //await page.close()

})

test("To Fetch the Drop down values", async({page})=>
{
    await  page.goto("https://www.wikipedia.org/")

    await page.waitForTimeout(2000)

    let dropDownValues = await page.locator('//select[@id="searchLanguage"]/option').all()

    console.log("Total values in the drop down is: " + dropDownValues.length)

    for(let i of dropDownValues)
    {
        let text = await i.textContent()

        console.log(text)
    }


})

