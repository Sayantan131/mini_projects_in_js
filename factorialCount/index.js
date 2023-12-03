let number = prompt("Enter the number you want factorial: ") ;
let fact = 1

 function factorial(number){

    for (let index = 1; index <= number; index++) {
        
        fact = fact*index;
    }
    return fact;
}

alert(`so the factorial of ${number} is: ${factorial(number)}`);