function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    let shippingSum; 
    if (productSum == 0){
       (shippingSum = 0)
    }
    
    if (productsSum >= freeShippingMinSum){
       (shippingSum = 0)
    }
    
    if (productsSum > 0) 
    else (productsSum > freeShippingMinSum) {
        (shippingSum = shippingPrice)  
    }

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

   let discountSum;
   if (discountSum > = discountMinSum){
      (discountSum = discountPart % (productsSum))
      else {
        (discountSum = 0)
      }
   }  

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum;
    totalSum = productsSum;
    totalSum = productsSum - discountSum;


    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum + shippingSum =
    
    let freeShipping;


    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    shippingSum = 0
    true (freeShipping = true) {
        else (freeShipping = false)
    }   
     
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
