const password = 'PkmnMystDungnRulz117';

function checkLowercase(password){
    for (let i=0; i<password.length; i++){
      if (password.charAt(i) == password.charAt(i).toLowerCase() && password.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
}
// console.log(checkLowercase(password))

function checkUpperCase(password){
    for (let i=0; i< password.length; i++){
        if(password.charAt(i) == password.charAt(i) .toUpperCase() && password.charAt(i).match(/[a-z]/i)){
            return true;
        }
    }
    return false;
}
// console.log(checkUpperCase(password));


function containsAnyLetter(password){
    return /[a-zA-Z]/.test(password);
}
// console.log(containsAnyLetter(password));


function hasNumber(password){
    return /\d/.test(password);
}
// console.log(hasNumber(password));



if (containsAnyLetter(password)=== true && hasNumber(password)=== true &&  checkUpperCase (password) === true && checkLowercase (password)===true && password.length >= 10) {
   console.log("Sucess!")
} else if (containsAnyLetter(password)=== true && hasNumber(password)=== true &&  checkUpperCase (password) === false && checkLowercase(password)===true && password.length >= 10){
    console.log("Password must contain an uppercase letter. ")
} else if (containsAnyLetter(password)=== true && hasNumber(password)=== true &&  checkUpperCase (password) === true && checkLowercase(password) ===false && password.length >= 10){
    console.log("Password must contain a lowercase letter. ")
} else if (containsAnyLetter(password)=== true && hasNumber(password)=== false &&  checkUpperCase(password) === true && checkLowercase(password) ===true && password.length >= 10){
    console.log("Password must contain a number")
} else if (containsAnyLetter(password)=== false && hasNumber(password)=== true &&  checkUpperCase(password) === true && checkLowercase(password) === true && password.length >= 10){
    console.log("Pass word must conain a letter")
}else {
    console.log("Failure.")
}
   

//  console.log(`${password.length}`)