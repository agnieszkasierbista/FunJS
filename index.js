'use strict'

// this is how .reduce works - add strings
const strings = ["asddfdf", "dfdferetrt", "orabdfigr", "fff"];

const concatenatedStrings = strings.reduce(concatenate, "");

function concatenate(acc, string) {
  return acc + string;
};

console.log(concatenatedStrings);
//sums numbers
const numbers = [3, 5, 6, 2, 7, 32, 78, 11, 34, 1, 34, 65, 33];

const summedNumbers = numbers.reduce(sumUp, 0);

function sumUp(acc, number) {
  return acc + number;
};

console.log(summedNumbers);

// generates an object with key:value pairs 1
const object1 = numbers.reduce(passToObject, {});

function passToObject(acc, number) {
  return { ...acc, [number]: "dupa " + number };
};

console.log(object1);

// generates an other object with key:value pairs 1, but values are different
const object2 = numbers.reduce(passToObject2, {});

function passToObject2(acc, number) {
  const value = number + 1;
  return { ...acc, [number]: "dupa " + value };
};

console.log(object2);

//lists reviews according to score in an object 2 
const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const reviewsByScore = reviews.reduce(groupByScore, {});

function groupByScore(acc, review) {
  const value = acc[review] || 0;
  return { ...acc, [review]: value + 1 };
};

console.log(reviewsByScore);

//closure

const studentsResults = [
  { name: 'Joe', grade: 88 },
  { name: 'Jen', grade: 94 },
  { name: 'Steph', grade: 77 },
  { name: 'Allen', grade: 60 },
  { name: 'Gina', grade: 54 },
];

const messages = {
  a: 'Excellent Job',
  b: 'Nice Job',
  c: 'Well done',
  d: 'What happened',
  f: 'Not good',
};

function letterGrade(points) {
  if (points >= 90) {
    return 'a';
  } else if (points >= 80) {
    return 'b';
  } else if (points >= 70) {
    return 'c';
  } else if (points >= 60) {
    return 'd';
  } else {
    return 'f';
  }
};


const studentFeedback = studentsResults.map(giveFeedback(messages));

function giveFeedback(feedback) {
  return function (result) {
    return `${feedback[letterGrade(result.grade)]} ${result.name}, you got an ${result.grade}`;
  }
};

console.log(studentFeedback);