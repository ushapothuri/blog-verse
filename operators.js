//arithmatic operators

let x=10,y=20

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y);

//assignment operators

z=4
z +=2
console.log(z)

z -= 2
console.log(z)
z *=3
console.log(z)
z /=3
console.log(z)

//comparision operators (returns boolean vaues)

let a=10,b="10"
console.log(a==b)
console.log(a!=b)
console.log(a===b) //checks type
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a<=b)
console.log(a<=b)

//logical operators

let age=20

console.log(age>=20 && age<40)
console.log(age>=20 || age<40)
console.log( !(age<40))

//string operators

let firstName="pothuri"
let lastName="usha"
let fullName=firstName+" "+lastName
console.log(fullName)

let correctName=`hello ${lastName} ${firstName} ,welcome`
console.log(correctName)

//ternary operators

let AGE=20

if(AGE>=18)
{
    console.log("eligible for voting")
}else{
        console.log("not eligible for voting")
}

let result=AGE>=18 ? "eligible to vote " : "not eligible to vote"
console.log(result)


//increment decrement

let count=5
console.log(count++)
console.log(count--)
console.log(++count)
console.log(count)

//typeof operators

console.log(typeof count)
console.log(typeof b)
console.log(typeof 100)