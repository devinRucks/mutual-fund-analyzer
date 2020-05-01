// Needed in order to start counting their frequency. NO DUPLICATES
const removeDuplicateHoldings = (duplicateHoldings) => {
     return duplicateHoldings.reduce((unique, item) => {
          return unique.includes(item) ? unique : [...unique, item]
     }, [])
}

const returnCount = (duplicateHoldings, holding) => {
     let count = 0;
     for (i = 0; i < duplicateHoldings.length; i++) {
          if (duplicateHoldings[i] === holding) {
               count++
          }
     }
     return count;
}

const findFrequencies = (duplicateHoldings, uniquehHoldings) => {
     const frequencies = []

     uniquehHoldings.forEach(holding => {
          const count = returnCount(duplicateHoldings, holding)
          frequencies.push([holding, count])
     });

     return frequencies
}


const displayHoldingFrequency = (holdings) => {
     // Duplicates
     const duplicateHoldings = [].concat.apply([], holdings)

     // No Duplicates
     const uniquehHoldings = removeDuplicateHoldings(duplicateHoldings)

     // Take the unsorted frequencies, and sort them from greatest (most common) to least
     sortedFrequencies = findFrequencies(duplicateHoldings, uniquehHoldings).sort((a, b) => {
          return b[1] - a[1]
     })

     // Display in nice format
     const fundCount = holdings.length
     sortedFrequencies.forEach((element) => {
          const percentage = (element[1] / fundCount * 100).toFixed(2)
          console.log(`${element[0]} appeared ${element[1]} time(s). (${percentage}%)`)
     })
}

module.exports = displayHoldingFrequency