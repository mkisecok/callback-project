
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
    return element.reduce((wert,item)=> wert+ (  item.priceSelling - item.priceBuying),0)
  }     
  console.log(alisProfit(dataSeptember));


  console.log(`======Task3======`);


  const input = [1, -4, 12, 0, -3, 29, -150];

  function sumUpPositiveNumbers(input) {
   return input.filter(a => a>0).reduce((a,b)=>a+b)
};
console.log(sumUpPositiveNumbers(input));
