const text = "Sam is going to codingschool";


let upper = text.toUpperCase();
console.log(upper);
const lower = text.toLowerCase();
// const firstLet = text[0].to();
const firstLetter = "Sam Is Going To Codingschool";
// const firstLetter = text.style.textTransform = "capitalize";

const samUP = upper.slice(0, 4);
const samDOWN = text.substring(0, 4);
const schoolUP = upper.substring(22);
const schoolDOWN = text.substring(22);
const isgoUP = upper.substring(4, 16);
const isgoDOWN = text.substring(4, 16);

const third = samUP + isgoDOWN + schoolUP;
const fourth = samDOWN + isgoUP + schoolDOWN;
document.write(upper + "<br>" + lower + "<br>" + third + "<br>" + fourth + "<br>" + firstLetter);
