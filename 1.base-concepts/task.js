function solveEquation(a, b, c) {
  let arr = [];

  let discrim = b**2 - 4 * a * c;
  
  if (discrim > 0) {
    arr[0] = (-b + Math.sqrt(discrim)) / (2 * a); 
    arr[1] = (-b - Math.sqrt(discrim)) / (2 * a);
  } 

  if (discrim === 0 ) {
    arr[0] = -b / (2 * a);
  } 
    
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
 /* let parametersArray = [+percent, +contribution, +amount];
    for (i = 0; i < parametersArray.length; i++) {
      if (!Number.isNaN(parametersArray[i])) continue;
    
       alert(`Параметр ${parametersArray[i]} содержит неправильное значение ${parametersArray[i]}`);
       return;
    }*/
  if (Number.isNaN(+percent) || +percent === 0) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (Number.isNaN(+contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);  
  }

  if (Number.isNaN(+amount) || +percent === 0) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);  
  }

  let monthNumber = Math.round(( date.getTime()- Date.now())/(1000 * 60 * 60 * 24 * 30.4));
  let creditBody = amount - contribution;
  let monthPercent = percent /(100 * 12);
  let monthPayment = creditBody * (monthPercent + monthPercent / (((1 + monthPercent)**monthNumber) - 1));

  totalAmount = +(monthPayment * monthNumber).toFixed(2);

  console.log (totalAmount);

  return totalAmount;
}
