'use strict'

// this is how .reduce works
const strings = ["asddfdf", "dfdferetrt", "orabdfigr", "fff"];

const concatenatedStrings = strings.reduce(concatenate, "");

function concatenate(acc, string) {
  return acc + string;
};

console.log(concatenatedStrings);

const numbers = [3, 5, 6, 2, 7, 32, 78, 11, 34, 1, 34, 65, 33];

const summedNumbers = numbers.reduce(sumUp, 0);

function sumUp(acc, number) {
  return acc + number;
};

console.log(summedNumbers);

const object1 = numbers.reduce(passToObject, {});

function passToObject(acc, number) {
  return { ...acc, [number]: "dupa " + number };
};

console.log(object1);

