// let number = prompt("Enter the number you want factorial: ") ;

// let fact = 1

//  function factorial(number){

//     for (let index = 1; index <= number; index++) {
        
//         fact = fact*index;
//     }
//     return fact;
// }
// alert(`so the factorial of ${number} is: ${factorial(number)}`);




//using redu e method

let number = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    // console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a,b)=>a*b)
    // console.log(c);
    return c;
}

console.log(factorial(number));


