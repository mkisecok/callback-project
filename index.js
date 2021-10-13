
console.log(`======Task1======`);
 const students = [
    { name: 'Quincy', grade: 83 },
    { name: 'Jason', grade: 70 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  
function whoPassed(obj)
{
    return obj.filter(result=> result.grade >=70 )
}   
  console.log(whoPassed(students));

  console.log(`======Task2======`);

  let dataSeptember = [
    {
      product: 'Dell Inspiration',
      sold: 10,
      priceBuying:200.00,
      priceSelling: 396.99
    },
    {
      product: 'Hp Elite Book',
      sold: 15,
      priceBuying:200.00,
      priceSelling: 496.99
    },
    {
      product: 'Mac Book Air',
      sold: 25,
      priceBuying:400.00,
      priceSelling: 796.99
    },
    {
      product: 'Samsung Galaxy Book',
      sold: 2,
      priceBuying:200.00,
      priceSelling: 396.99
    }
  ];

  function alisProfit(element)
  {
    return element.reduce((wert,item)=> wert+ (  item.priceSelling - item.priceBuying)*item.sold,0)
  }     
  console.log(alisProfit(dataSeptember));


  console.log(`======Task3======`);


  const input = [1, -4, 12, 0, -3, 29, -150];

  function sumUpPositiveNumbers(input) {
   return input.filter(a => a>0).reduce((a,b)=>a+b)
};
console.log(sumUpPositiveNumbers(input));

console.log(`======Task4======`);

const letterArray = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];


function countLetter(param)
{   
   return param.flat().reduce(function(acc,cur)
    {    
        return acc[cur] ? ++acc[cur] : acc[cur]=1, acc}
    ,{})
}
console.log(countLetter(letterArray));




/*
let obj = {};
for (let i = 0; i < letterArray.length; i++) {

for (let k = 0; k < letterArray[i].length; k++) {

if(!obj[letterArray[i][k]])
{
obj[letterArray[i][k]] = 1;
}
else{
obj[letterArray[i][k]] +=1;
}
}
}
console.log(obj); 
*/
/*
const letterArray = [
    ['a', 'b', 'c', 'r'],
    ['c', 'd', 'f' , 't'],
    ['d', 'f', 'g' , 'r'],
    ];
    const arr = [];
    function newobj(input) {
    const result = {}; 
    for (i=0 ; i< input.length; i++)
    {
    let conter = 0;
    for (j=0 ; j<input.length ; j++) {
    if (input[i]===input[j])
    {
    conter = conter +1;
    result[input[i]]=conter;
    }
    }
    }
    return result;
    }
    for (i=0 ; i<letterArray.length ; i++ )
    {
    for (j=0 ; j< letterArray[i].length ; j++)
    {
    arr.push(letterArray[i][j])
    }
    }
    console.log(newobj(arr)); 
*/




