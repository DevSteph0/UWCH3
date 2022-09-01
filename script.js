// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomint (min,max){
  if(!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min*(1-random) + random*max)
}

function getRandomitem(list){
  return list[randomint(list.length)]
}

// Get references to the #generate element

function generatePassword() {

  while(true) {

    var userInput =window.prompt("what is the desired length for password")
    
    if (userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)
    
    if (isNaN(passwordLength)) {
      window.alert("not a number!") 
    }else if (passwordLength < 8 || passwordLength >128) {
      window.alert("invalid password length should be no more or less than 8 < 120 characters.")
    }else{
      break
    }
  }

 var userWantsNumbers = window.confirm("would you like to strengthen password by adding numbers?")
 var userWantsUppercase = window.confirm("would you like to strengthen password by adding uppercase?")
 var userWantsLowercase = window.confirm("would you like to strengthen password by adding lowercase?")
 var userWantsSpecialcase = window.confirm("would you like to strengthen password by adding specialcase?")

 var uppercaselist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];
 var lowercaselist = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
 var specialcaselist =  ["?","!","*","&","$","@","^","="]; 
 var  numberslist = ["1","2","3","4","5","6","7","8","9","0"];

 var optionsCart=[]

  for (var i = 0; i < lowercaselist.length; i++) {
  uppercaselist[i] = lowercaselist[i].toUpperCase()
 }

  if (userWantsNumbers === true){
    optionsCart.push(numberslist)
  }
  if (userWantsLowercase === true){
    optionsCart.push(lowercaselist)
  }
  if (userWantsSpecialcase === true){
    optionsCart.push(specialcaselist)
  }
  if (userWantsUppercase === true){
    optionsCart.push(uppercaselist)
  }
  if (optionsCart.length === 0) {
    optionsCart.push(lowercaselist)
  }

  var generatedPassword = ""


  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomitem(optionsCart)
    var randomChar = getRandomitem(randomList)
    generatedPassword += randomChar

  }
  return generatedPassword 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  if (password) {
    passwordText.value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
