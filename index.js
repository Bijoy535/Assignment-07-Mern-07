//========== Assignment 02 ========//



//--------------1 start --------------//


function calculateDifference(a, b) {
    return a - b;
}
let diff = calculateDifference(10, 5);
console.log(diff);
//--------------End  --------------//




//--------------2 start  --------------//
function isOdd(number) {
    return number % 2 !== 0;
}
let n1 = isOdd(8);
console.log(n1); 

//--------------End  --------------//




//--------------3 start  --------------//
function findMin(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    }
    
    let min = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    
    return min;
}
console.log(findMin([7, 12, 25, 19, 5]));

//-------------- End  -----------------//



//--------------4 start  --------------//
function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}
let num2 = [10, 5, 8, 3, 15, 2, 7];
let evenNumbers = filterEvenNumbers(num2);
console.log(evenNumbers); 

//-------------- End  -----------------//




//--------------5 start  --------------//
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
let allnumber = [10, 5, 8, 3, 15, 2];
let sortedNumbers = sortArrayDescending(allnumber);
console.log(sortedNumbers); 

//-------------- End  -----------------//





//--------------6 start  --------------//
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
let word = lowercaseFirstLetter("A lovely Cat");
console.log(word);

//-------------- End  -----------------//



//--------------7 start  --------------//
function countVowels(str) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    let vowelCount = str.split('').filter(char => vowels.includes(char)).length;
    
    return vowelCount;
}

let result = countVowels("I love you Bangladesh ");
console.log(result);
//-------------- End  -----------------//





//--------------8 start  --------------//
function findAverage(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
let num3 = [10, 5, 8, 3, 15];
let average = findAverage(num3);

console.log(average);

//-------------- End  -----------------//




