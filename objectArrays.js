let person =
{
    name : "usha",
    age:18,
}

console.log(person.name)


let fruits=["apple","banana","mango"]
console.log(fruits[0])



let numbers=[1,2,3,4,5]
let square=numbers.map((num)=> num*num)
console.log(square)

let even = numbers.filter((num)=>num%2==0)
let a = square.filter((num)=>num%2==0)

console.log(even)
console.log(a)

let sum = numbers.reduce((present,num)=>present+num)
console.log(sum)


let b=[10,20,30]
console.log(b)
let c=b.map((num)=>num+5)
console.log(c)


let A=[
        
        {
            name :"ram",
            marks : 100
        },
        {
            name :"usha",
            age :170
        },
        {
            name :"bhoomi",
            marks:90
        }
]

present=0
for(let person of A){
    if(present<A.marks)
    {
        present=A.marks
        m=A.name
        n=A.marks
    }
}

console.log(n)
console.log(m)