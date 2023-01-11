
// q 1
function add(number1, number2){
    return number1+number2 
}
document.write(add(25, 5));
// q 2
document.write("<br>")
function calc(number1, operator, number2 ){
    if (operator == "+") {
    return number1 + number2
    } else if(operator=="-"){
        return number1 - number2
    }else if(operator=="*"){
        return number1 * number2
    }else if(operator=="/"){
        return number1 / number2
    }
}
document.write(calc(5, "/", 5))

// q 3 palindrome

function check_palindrome( str )
    {
      let j = str.length -1;
      for( let i = 0 ; i < j/2 ;i++)
      {
        let x = str[i] ;
        let y = str[j-i];
        if( x != y)
        {
          
          return false;
        }
      }
     
      return true;
       
    }
     
    
    function is_palindrome( str )
    {
     
      let ans = check_palindrome(str);
     
      if( ans == true )
      {
        console.log(test + " is a palindrome");
      }
      else
      {
        console.log(test + " isnt a palindrome");
      }
    }
    
    let test = prompt("enter a word to check if its a palindrome");
    is_palindrome(test);

//q4

function vowelCounter(str){
  vowelCount = 0
  lengthString = str.length
  for(i=0;i <= lengthString ; i++){
    if(str[i] == "A" ||str[i] == "E" ||str[i] == "I" ||str[i] == "O" ||str[i] == "U" || str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u" ){
      vowelCount += 1
    }else{

    }
}
document.write(vowelCount)
}
vowelCounter(prompt("Enter a string"))

//q6
function countUppercase(str){
  uppercaseCount = 0;
for(i=0;i < str.length; i++){
  if(str[i]==str[i].toUpperCase()){
    uppercaseCount += 1
  }else{

  }
}
document.write(uppercaseCount)
}
countUppercase(prompt("Enter a word to count the amount of uppercase letters"))

//Q7

function numberCounter(str){
  numberCount = 0
  for(i=0;i<str.length;i++){
    if(str[i]!=isNaN){
      numberCount += 1
    }else{

    }
  }
  document.write(numberCount)
}
numberCounter(prompt("WRITE A STRING TO CHECK HOW MANY NUMBERS IT HAS"))