const scrapeFundHoldings = require('./fundHoldingsScraper')
const scrapeFundNames = require('./fundNameScraper')
const displayHoldingFrequency = require('./utilityFunctions')


const main = async () => {
     const allFundNames = await scrapeFundNames();

     const allHoldings = await scrapeFundHoldings(allFundNames)

     displayHoldingFrequency(allHoldings)
}

main()
