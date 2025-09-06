let day=2

switch(day)
{
    case 1:
        {
            console.log("monday");
            break;
        }
    case 2:
        {
             console.log("tuesday")
              break;
        }
    case 3:
        {
            console.log("wednesday");
            break;
        }
    case 4:
        {
             console.log("thrusday")
              break;
        }
    case 5:
        {
             console.log("friday")
              break;
        }
    case 6:
        {
             console.log("saturday")
              break;
        }
    case 7:
        {
             console.log("sunday")
              break;
        }

}


// let a="*"
// for(i=0;i<=10;i++)
// {
//     console.log(a)
// }

let i=1
while(i<10)
{
    console.log(i);
    i++;
}




let colours=["red","blue","green"]
for(let i=0;i<colours.length;i++)
{
    console.log(colours[i])
}

for(let colour of colours)
{
        console.log(colour)

}

let person=
{
    name:'usha',
    age :18,
    clg :"jntu",
}

for(let key in person)
{
    console.log(`${key}:${person[key]}`)
}

i=1
while(i<10)
{
    if(i===5)
    {
     break;
    }
    console.log(i);
    i++;
}
