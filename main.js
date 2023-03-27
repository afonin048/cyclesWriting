let result1 = [] 
let result2 = [] 

for (let i = 10; i < 21; i++){
    result1.push(i)
    result2.push(i*i)
    
    
    

}
document.write(result1.join(`, `), `<br><br>`)
document.write(result2.join(`, `), `<br><br>`)

let result3 = [] 

for (let j = 1; j < 11; j++){
    result3.push(`7 * ${j} = ${7*j}`)
}
document.write(result3.join(`, `), `<br><br>`)

let result4 = []
let sum = 0
for (let k = 1; k<16; k++){
    result4.push(k)
    sum+= k
}
document.write(`${result4.join(` + `)} = ${sum}`, `<br><br>`)

let result5 = []
let prod = 1
for (let l = 15; l < 36; l++){
    result5.push(l)
    prod*= l
}
document.write(`${result5.join(` * `)} = ${prod}`, `<br><br>`)

let result6 = []
let sumForAverage = 0
for (let m = 1; m < 501; m++){
    result6.push(m)
    sumForAverage+= m

}
document.write(`(${result6.join(` * `)}) / ${result6.length} = ${sumForAverage/result6.length}`, `<br><br>`)

let result7 = []
let sumForEven = 0
for (let n = 15; n<41; n++){
    result7.push(n*2)
    sumForEven+= n*2
}
document.write(`${result7.join(` + `)} = ${sumForEven}`, `<br><br>`)

let result8 = []

for (let n = 34; n<67; n++){
    result8.push(n*3)
    
}
document.write(result8.join(`, `),  `<br><br>`)

let randomNumber = Math.floor(Math.random() * 100)
let result9 =[]
for (let o = 2; o < randomNumber; o++){
    if(randomNumber % o == 0){result9.push(o)}
}

let result10 = []
for (let p = 0; p<result9.length;p++){
    if(result9[p] % 2 == 0){result10.push(result9[p])}
    
}
document.write(`All divisors of a number ${randomNumber}: ${result9.join(`, `)}`,  `<br><br>`)
document.write(`Quantity of even divisors is ${result10.length} of a number ${randomNumber}. [${result10.join(`, `)}]`,  `<br><br>`)


let sumOfEvenDivisors= 0
for (let q=0; q<result10.length; q++){
    sumOfEvenDivisors +=result10[q]
}
document.write(`Sum of even divisors is ${sumOfEvenDivisors} of a number ${randomNumber}. [${result10.join(`, `)}]`,  `<br><br>`)

let result12 = []
for (let r=1; r<11; r++){

    for (let i = 1; i<11; i++){
        result12.push(` ${r} * ${i} = ${r*i}`)
       
    }
    
}
console.log(result12)
document.write(result12.join(`;   `))


