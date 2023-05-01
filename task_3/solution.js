function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    let itemCountText = ``;
    itemCountText += product.count;
    itemCountText += ' × ';
    itemCountText += product.price;
    itemCountText += ` ₽ = `;
    let sum = product.count * product.price;
    itemCountText += sum;
    itemCountText += ` ₽`;
  
        // 1. Создайте переменную itemCountText, равную пустой строке
    // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
    // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
    // 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
    // 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
    // 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
    // 8. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`
    

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
