## How It Works
* Web scraper retrieves the names of the top performing mutual funds in specific category. 
* Takes that list of names and searches for each fund's top 10 holdings. 
* Runs through a few functions which ultimately results in how many times each holding occured.
* Sorts the frequency of all the holdings from most to least frequent. 

## Directions
* Run the app.js file.
* If you want to change how many pages it sorts through:
  * Open fundNameScraper.js and navigate to the loopThroughPages function. 
  * Change the maximum loop number to how many pages you want, plus 1 (Ex: You want 4 pages of results, change max loops to 5)
* If you want to change what category it scrapes:
  * Open fundNameScraper.js and change the link accordingly.
  * NOTE: Your mutual fund names must come from mutualfunds.com, as that is the way the scraper is setup to retrieve the data.

## Built With

* Javascript
* [Puppeteer](https://pptr.dev/) - Web Scraper
* [MutualFunds.com](https://mutualfunds.com/) - Mutual Fund Names
* [Yahoo Finance] (https://finance.yahoo.com/) - Mutual Fund Holdings
