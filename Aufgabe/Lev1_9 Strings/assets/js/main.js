const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

const text1School = text1.replace("codingschool", "school");


const first = text1School.concat("and the movie theater");

const second = text1.replace("codingschool", "movie theater");

const third = text2.concat(" " + text4 + " " + text1School.replace("is", "are"));
console.log(third);

const fourth = text2.concat(" ", text4, " ", third.slice(9, 25), " ", "the gym and the movie theater");
console.log(fourth);

const fivth = text2.concat(" ", text1School.slice(4), " ", text4, "", fourth.slice(37));
console.log(fivth);

document.write(first + "<br>" + second + "<br>" + third + "<br>" + fourth + "<br>" + fivth);