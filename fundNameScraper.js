const puppeteer = require('puppeteer')

const scrapeFundNames = async (url) => {
     const browser = await puppeteer.launch()
     const page = await browser.newPage()
     console.log("Retrieving Funds....")

     await page.goto(url)

     const result = await page.evaluate(() => {
          const rows = document.querySelectorAll('table tr');
          return Array.from(rows, row => {
               const columns = row.querySelectorAll('td');
               return Array.from(columns, column => column.innerText);
          });
     });

     //  Finds value between parentheses
     const regExp = /\(([^)]+)\)/;

     // Array of results for a single page
     const mutualFunds = []

     // Result is array of arrays
     result.forEach((row) => {
          if (row[2] !== undefined) {
               const matches = regExp.exec(row[2])
               mutualFunds.push(matches[1])
          }
     })

     browser.close()

     return mutualFunds
}


const loopThroughPagesResult = async () => {
     const allFunds = []

     for (pageNum = 1; pageNum < 5; pageNum++) {
          const url = `https://mutualfunds.com/categories/equity-funds/international-and-foreign-equity-funds/international-and-foreign-growth-equity-funds/#page=${pageNum}`
          const funds = await scrapeFundNames(url)
          allFunds.push(funds)
     }

     return [].concat.apply([], allFunds)
}

module.exports = loopThroughPagesResult

