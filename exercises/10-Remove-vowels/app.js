const rapid=(myString)=>{
    let=consonate=[];
    for(let letter of myString.toLowerCase()) {
        if(['a','e','i','o','u'].includes(letter) == false)
            consonate.push(letter.toUpperCase())
    }
    return consonate.join('');
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
   
