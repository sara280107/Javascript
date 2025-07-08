// for loop
// let name1 = ["sara", "elina", "elvina",];
// for (let i = 0; i < name1.length; i++) {
//     console.log("for loop : ", name1[i]);
// }

// Task
// let name2= [
//     [1,2,3],
//     [1,2,3],
//     [1,2,3],
//     [1,2,3],

// ];
// for(let a=0;a<name2.length;a++){
//     for(let b=0;b<name2[a].length;b++)
//     {
//         console.log(name2[a]);
//     }
// }

// task pyramid
// let rows=5;
// for(let j=1;j<=rows;j++)
// {
//     let space = "";
//     let stars ="";
//     // add space
//     for(let a=1;a<=rows[j];a++)
//     {
//         space+="  "
//     }
//     // add stars
//     for(let k=1;k<=j;k++)
//     {
//         stars+="*"
//     }
//     console.log(space +stars);
// }

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}

let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <= num; i++) {     //first 'for loop' for horizontal lines
        for (let j = 1; j <= (num - i); j++) {    //second 'for loop' to add 'spaces' before pattern
            pattern += "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {      //third 'for loop' to add * to pattern string
            pattern += "* ";
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}
// while loop
// let j = 1;

// while (j <= 10) {
//     console.log("while:", j);
//     j++;
// }

// Task 
// let i;
//    const f=[12,13,14,15,16,17,18];
//    while(f<=f.length)
//    {
//     for(let i=0;i<length)
//     console.log("while:",f[i]);
//     f++;
//    }


// do_while loop
// let z = 1;

// do {
//     console.log(z);
// }
// while (z < 5)



// // for..of loop
// const fruit=["Apple","Cherry","Mango"];
// for(const frru of fruit)
// {
//     console.log("Fruit:",frru);
// }


// // foreach

// const fruits=["Apple","Cherry","Mango","Banana"];
// fruits.forEach((fru)=>{
//     console.log("Fruits:",fru);
// })


// // for in : keys and values together

// const person={
//     name1:"sara",
//     age:18
// };
// for(const key in person)
// {
// console.log(key + ":"  + person[key]);
// }

