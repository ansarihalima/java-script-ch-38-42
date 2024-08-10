
////////////////////// QUESTION 1
function power(a, b) {
    if (b < 0) {
        a = 1 / a;
        b = -b;
    }

    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    return result;
}
console.log(power(2, 3)); 
console.log(power(5, -2)); 

/////////////////////////// QUESTION 2

function Year(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}
console.log(Year(2012)); 
console.log(Year(2016)); 
console.log(Year(2020)); 
console.log(Year(1900)); 
console.log(Year(2000)); 
console.log(Year(2024)); 

////////////////////////////// QUESTION 3

function calculateAverage(marks1, marks2, marks3) {
    var totalMarks = marks1 + marks2 + marks3;
    return totalMarks / 3;
}
function calculatePercentage(marks1, marks2, marks3, maxMarks = 100) {
    var totalMarks = marks1 + marks2 + marks3;
    var totalPossibleMarks = maxMarks * 3; 
    return (totalMarks / totalPossibleMarks) * 100;
}
function mainFunction(marks1, marks2, marks3) {
    var average = calculateAverage(marks1, marks2, marks3);

    var percentage = calculatePercentage(marks1, marks2, marks3);

    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
}
var mark1 = 85;
var mark2 = 90;
var mark3 = 78;
mainFunction(mark1, mark2, mark3);

// //////////////////////////////QUESTION 4

function removeVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i]; 
        }
    }

    return result; 
}
const mySentence = 'This is an example sentence.';
const finalSentence = removeVowels(mySentence);
console.log(finalSentence); 

//////////////////////////////////// QUESTION 5

function countDoubleVowels(text) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < text.length - 1; i++) {
        const char1 = text[i];
        const char2 = text[i + 1];
        switch (true) {
            case (vowels.includes(char1) && vowels.includes(char2)):
                count++;
                break;
        }
    }

    return count;
}
const myText = 'This is an example sentence with some vowels like oo, ee, and ai.';
const doubleVowelCount = countDoubleVowels(myText);
console.log(doubleVowelCount); 


//////////////////////////////////////// QUESTION 6


function kmToMeters(km) {
    return km * 1000;
}
function kmToFeet(km) {
    return km * 3280.84; 
}
function kmToInches(km) {
    return km * 39370.08; 
}
function kmToCentimeters(km) {
    return km * 100000; 
}
function convertDistance(km) {
    console.log("Distance in kilometers: " + km);
    console.log("Distance in meters: " + kmToMeters(km));
    console.log("Distance in feet: " + kmToFeet(km));
    console.log("Distance in inches: " + kmToInches(km));
    console.log("Distance in centimeters: " + kmToCentimeters(km));
}
const distanceInKm = 5; 
convertDistance(distanceInKm);

////////////////////////////////////////// QUESTION 7

function calculateOvertimePay(hoursWorked) {
    let overtimeRate = 12.00; 
    let regularHours = 40; 

    let overtimePay = 0;
    if (hoursWorked > regularHours) {
        let overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }

    return overtimePay;
}
let hoursWorked = 50; 
let pay = calculateOvertimePay(hoursWorked);
console.log("Overtime Pay: Rs. " + pay.toFixed(2));

///////////////////////////////////////////// QUESTION 8

function calculateNotes(amount) {
    const notes100 = 100;
    const notes50 = 50;
    const notes10 = 10;
    let num100Notes = (amount - (amount % notes100)) / notes100;
    amount = amount % notes100; 
    let num50Notes = (amount - (amount % notes50)) / notes50;
    amount = amount % notes50; 
    let num10Notes = (amount - (amount % notes10)) / notes10;
    amount = amount % notes10; 
    console.log("Number of 100-rupee notes: " + num100Notes);
    console.log("Number of 50-rupee notes: " + num50Notes);
    console.log("Number of 10-rupee notes: " + num10Notes);
}
const amount = 380; 
calculateNotes(amount);
