const text = "Sam is good at codingschool";

const bad = text.replace("good", "bad");
const badSchool = bad.replace("codingschool", "school");
console.log(badSchool);
const susi = text.replace("Sam", "Susi");
const susiSchool = susi.replace("codingschool", "school");
console.log(susiSchool);
const tennis = text.replace("codingschool", "tennis");

document.write(badSchool + "<br>" + susiSchool + "<br>" + tennis);
