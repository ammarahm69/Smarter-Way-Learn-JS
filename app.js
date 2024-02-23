//Chapter1 & 2
//Code for  name & nationality// 

// var myName1 = "Ammar ";
// var nationality1 = "Pakistan";
// alert("My name is " + myName1 + ". I am from " + nationality1 + " .");
//Javascript code to tell browser that I am a SMIT student

// var myName = "Ammar";
// var lastName = "Ahmed";
// var nationality = "Pakistani";
// var work = "I am a student in SMIT";
// var course = "Web & Moblie app development";
// var id = 227780;
// var instructor = "Sir Rizwan Bhatti";
// var batch = 11;
// var SMIT = "Saylani Mass IT Training";
// alert("Welcome " + myName + " " + lastName + " .My natonality is " + nationality + " " + work + " . I am learning " + course + " . My roll number there is " + " " + id + " . Our course instructor is " + instructor + " . My batch is " + batch + ". SMIT stands for " + SMIT);



// Chap 2
// alert(300);
// var weight = 150;
// var weight1 = 500;
// alert(weight + weight1);

// var originalNum = 80;
// var localNum = 40;
// var originalNum = originalNum + localNum;
// console.log(originalNum + " is the total amount for your work");

// // chap3
// var userName = "Ammar"
// var likeEats = "biryani"
// console.log("User name is " + userName + " he like to eat " + likeEats);

// var num = 200;
// var popNum = 100;
// var popNum = popNum + num;
// console.log(popNum);


// var numOrgin = 13;
// var minus = 10;
// var finalResult = minus - numOrgin;
// console.log(finalResult);

// var remainder = 25 % 3;
// console.log(remainder);


// var whatsLeftOver = 9 % 3;
// alert("The remainder is " + whatsLeftOver);

// a++ (post-increment)
// ++a (pre-increment)
// var Input = 90;
// var newNum = ++Input;
// alert(Input);
// // console.log(Input);


// var question = "Remainder ko plus krna ha";
// alert(question);
// var num = 29;
// var num1 = 5;
// var newNum = (num % num1) * 2 ;
// console.log(newNum);



// var constantValue = 1;
// var nweNum = constantValue++;
// console.log(nweNum);


// var totalCost = 1 + (3 * 4);
// console.log(totalCost);


// var resultOfComputation = ((2 * 4) * 4) + 1;
// console.log(resultOfComputation);

// // Concatenation//
// var message = "Thanks, ";
// var userName = " ";
// // var userInput = userName;
// var alas = "!";
// var welcomeAlert = prompt(" Please Enter Your Name");

// if (welcomeAlert === null) {
//     document.write("<h1>Sign up Failed!!</h1>")
// }
// else{
//     document.write("Hello "+ message +" "+ userName + alas)
//     document.write( welcomeAlert);
// }
// alert();

// alert('5' + '5 is equal to ' + 55 )

// var question = "Your Religion";
// var gender = "Your gender is";
// var spedc = prompt(question + " " + gender);

// var peopleNum= window.prompt("Kitne Adami the.");
// console.log(peopleNum);
// var userResponse = peopleNum +6;
// document.write(userResponse);

/**Suppose you code a prompt that asks, "Where does the Pope live
If the user answers correctly, you display an alert congratulating him.
This is the code. */
// var x = prompt('Quaid-e-azam ka mazar kidhr hai?');
// if(x === "Saddar"){
//     alert('Ustaad G sahi Btya')
// };

// var x = prompt('Poyo oil ki dukan Kidhr ha?');
// if(x === 'Jauhaur Mour'){
//     alert('3 pe dum 4 pe ghoom poyo oil!!!');
// }
// var x = prompt('What country  do you live?');
// if (x === 'Pakistan') {
//     alert('Correct!!')
// };

// var x = prompt('What country does Pope live?');
// var correctAnswer = 'Vaticain';
// if(x === correctAnswer){
//     alert('Correct Answer')
// }
// else{
//     alert('Wrong Answer')
// };
var x = prompt("Enter your name");
var b = prompt('Your Age'); 
var userInput = x
var userAge = b
var age = 18
if (x === '') {
    alert('Please Enter your Name')
    alert ('Please enter your age')
}
else{
    alert(`Tatti ! ${userInput}`)
    alert("Age  is " + userAge );
    document.write("Name is " +x);
    document.write(" Your age is  " + b);
}