// 1. Write a program that declares a variable price as a number, product as a string, and isAvailable as a boolean. Print their data types to the console.
let price = 150;
let product = "bread";
let isavailable = true;
console.log(typeof price);
console.log(typeof product);
console.log(typeof isavailable);

//2. Write a program that declares an array of numbers and a constant object representing a car with properties make, model, and year. Modify one of the properties of the object and print the updated object to the console.
let numebers = [30,40,50];
const car = {
    make: "ford",
    model: "mustang",
    year: 1964

};
car.year = 2020;
console.log(car);

//3. Write a program that compares two variables a and b using both == and ===. Print the result of each comparison to the console and explain the difference.
let a = 5;
let b ="5";
let example1 = (a==b);
let example2 = (a===b);
console.log(example1);
console.log(example2);
// example1 checks if the values are equal after converting them to a common type while example2 checks if the values and data types are both equal.

//4. Write a program that checks if a string str1 is lexicographically smaller than another string str2. Print the result to the console.
let str1 = "Ian";
let str2 = "Mwenda";
let result = str1 < str2;
console.log(result);

//5. Write a program that takes a variable age and prints "Child" if the age is less than 13, "Teenager" if the age is between 13 and 19, and "Adult" if the age is 20 or older.
let age = 15;
if (age < 13){
    console.log('child')
}else if(age >= 13 && age <=19){
    console.log("teenager")
} else {  console.log("adult")
   };


   /* 6. Write a program that takes a variable score and prints a grade based on the following criteria:

> A for scores 90 and above
> B for scores between 80 and 89
> C for scores between 70 and 79
> D for scores between 60 and 69
> F for scores below 60 */
let score= 30;
if (score >= 90){
    console.log('A');
}else if(score >=80){
    console.log("B");
}else if (score >= 70) {
    console.log("C")
}else if(score >= 60){
    console.log("D");
}else{
    console.log("F")
}

//7. Write a program that checks if a given number num is both positive and even. Print "The number is positive and even" if both conditions are true, otherwise print "The number does not meet both conditions".
function checkEven(num){
    if (num > 0 && num % 2 == 0){
        console.log("the number is even and positive");
    }else {
        console.log("the number is not positive or even");
    }
}
checkEven(7);

//8. Write a program that checks if a user is either an admin or has a valid subscription. If either condition is true, print "Access granted", otherwise print "Access denied".
let admin = true;
let subscription = false;
if(admin || subscription){
    console.log("Access granted");
}else {
    console.log("Access denied");
}

//9. Write a program that uses a for loop to print all the numbers from 1 to 20, but skips multiples of 3.
for(let i = 1; i <= 20; i ++){
    if(i % 3 !== 0){
        console.log(i);
    }
}

//10. Write a program that uses a switch statement to print the day of the week based on a variable dayNumber (0 for Sunday, 1 for Monday, etc.).
let dayNumber = 3;
switch(dayNumber){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}

//11. Write a program that uses a while loop to calculate and print the sum of all integers from 1 to n, where n is a variable.
let n = 30;
let sum = 0;
let i = 1;
while(i <= n){
    sum += 1
    i ++
}
console.log(sum)









