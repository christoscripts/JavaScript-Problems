// Problem : Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are below 0).

/**
 * @param {number[]} temperatures
 */


function getPositiveTemperatures(temperatures) {
    
    const temp = temperatures.filter(function(temperature) {
        return temperature > 0
    })
    return temp
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]


// Problem : Complete the function getFreezingTemperatures such that it returns an array containing the freezing temperatures (the temperatures that are below 0).

/**
 * @param {number[]} temperatures
 */
function getFreezingTemperatures(temperatures) {
    const temp = temperatures.filter(function(temperature) {
        return temperature < 0
    })
    return temp
}

// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]


// Problem : Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.

/**
 * @param {number[]} years
 * @param {number} searchYear
 */
function getYear(years, searchYear) {
    const result = years.find(function(year) {
        return (year === searchYear)
    })
    return result
}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined
