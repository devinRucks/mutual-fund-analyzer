const puppeteer = require('puppeteer')

const scrapeFundHoldings = async (fundNames) => {

     process.setMaxListeners(Infinity);

     // Array of holdings for a single fund
     const allHoldings = []

     const browser = await puppeteer.launch()
     const page = await browser.newPage()
     console.log("Retrieving Fund Holdings....")

     // prevents timeout error 
     await page.setDefaultNavigationTimeout(0)

     // loops through all the fund names to get holdings
     for (const fundName of fundNames) {
          const fundHoldings = []
          const url = `https://finance.yahoo.com/quote/${fundName}/holdings`

          await page.goto(url, { waitUntil: 'domcontentloaded' })

          const result = await page.evaluate(() => {
               const rows = document.querySelectorAll('table tr');
               return Array.from(rows, row => {
                    const columns = row.querySelectorAll('td');
                    return Array.from(columns, column => column.innerText);
               });
          });

          result.forEach((row) => {
               if (row[1] !== undefined || row.length !== 0) {
                    fundHoldings.push(row[1])
               }
          })

          allHoldings.push(fundHoldings)
     }

     browser.close()

     // nested array, Ex: allHoldings[0] === holdings of the first fund
     return allHoldings

}



module.exports = scrapeFundHoldings