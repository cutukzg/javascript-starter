const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95
/*const massMark = 95
const heightMark = 1.88
const massJohn = 85
const heightJohn = 1.76*/
const markBMI = massMark / heightMark ** 2
const johnBMI = massJohn / heightJohn ** 2
const markhigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI)
console.log(markhigherBMI)
