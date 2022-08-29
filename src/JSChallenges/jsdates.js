// JavaScript Dates problems

//Question 1
// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b)
{
return a.getTime() === b.getTime() 
}
//Answer
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
Expected
false

//Question 2
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(a, b)
{
  return a.getTime()===b.getTime()
}
//Another
function myFunction(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate()=== b.getDate()
}
//Answer
myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
Expected
true