// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Lecture All done.
/*
const x = 0;

console.log();
// PROBLEM 1:

// 1) Understanding the problem 
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function(temps) {
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 1:

// 1) Understanding the problem

// 2) Breaking up into sub-problems

const calcTempAmplitudeNew = function(temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([1, 8, 9], [7, 0, 2]);
console.log(amplitudeNew);

const measureKelvin = function() {
  const measurement = {
    type: 'temp',
    unit: 'celc',
    // C) FIX
    value: Number(prompt('Degrees value:'))
  };
  // B) FIND
  console.log(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the x days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('... ' + str);
};
printForecast(data1);
