//console.log("1" == 1); // true
//console.log("1" === 1); //false

//let number = 99;
//if (number == 99){
 //   console.log("The number is correct");
//}

//let num1 = 1;
//let num2 = 2;

//if(num1 < num2){
    //if you get here, the statement was true
  //  console.log("num1 is smaller than num2");
//}else{
    //console.log("num2 is smaller than num1");
//}

//let num1 = 1;
//let num2 = 2;
//let num3 = 3;
//let notTrue = false;

//if(num1,num2 && num3>num2){
   // console.log("num1 is smaller than num2 and num3 is larger than num2");
//}

//if(num1 == 1 || num2 == 1 || num3 == 1){
   // console.log("num1 is 1 or num2 is 1 OR num3 is 1");
//}

//if(!notTrue){
 //   console.log("not not true is true!");
//}


//Excercise
let Email =  prompt("Enter your email:")
console.log("Email")
let password = prompt("Enter your password:")
console.log("password")

if(Email == "admin@admin.com" && password=="Test1234"){
    document.write("Welcome " + Email);
}else{
    document.write("Invalid credentials");
}