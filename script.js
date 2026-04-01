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


// Problem : Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.

/**
 * @param {number[]} years
 */
function getOddYears(years) {
    const result = years.filter(function(year) {
        return !(year%2 == 0)
    })
    return result
}

// Sample usage - do not modify
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]


// Problem : Complete the function isAppUsed such that it returns true when the app parameter it receives exists in the apps parameter, and false otherwise.

/**
 * @param {string[]} apps
 * @param {string} app
 */
function isAppUsed(apps, app) {
    return apps.includes(app)
}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false

// Problem : Complete the function getStringSizes such that it returns an array of the number of characters for every string it receives in the strings parameter.

/**
 * @param {string[]} strings
 */
function getStringSizes(strings) {
    const result = strings.map(function(string) {
        return string.length
    })
    return result
}

// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]


// Problem : Classroom Project I 

// This is a classroom project! You can enter grades in the browser tab and add them to the app, which will show you various statistics about the classroom. For example, you will see the average grade, all the failing grades, etc.

// Each function has a comment describing what it should return, but you can also find them below:

// getNumberOfGrades should return the number of grades.
// getSumGrades should return the sum of all the grades.
// getAverageValue should return the average value of all grades (sum of all grades divided by the total number of grades).
// getPassingGrades should return all passing grades (10 and above).
// getFailingGrades should return all failing grades (9 and below).
// getRaisedGrades should return all the grades raised by 1 (grades should not exceed 20).


/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    // TODO: return the number of grades
    return grades.length
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    // TODO: return the sum of all the grades
    let sum = 0
    grades.forEach(function(grade) {
        sum += grade
    })
    return sum
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    let sum = 0
    grades.forEach(function(grade) {
        sum += grade
    })
    let result = sum/grades.length
    return result
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    // TODO: return all passing grades (10 and above)
    let result = grades.filter(function(grade) {
        return grade >= 10
    })
    return result
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
    let result = grades.filter(function(grade) {
        return grade < 10
    })
    return result
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
    let result = grades.map(function(grade) {
        grade++
        if(grade > 20) {
            grade = 20
        }  
        return grade
    })
    return result
}


// Problem : return all Eligible count 

/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
    
    let count = 0 
    ages.filter(function(age) {
        if(age >= 18) {
            count++
        }
    })
    return count
}

// Probelm : 
