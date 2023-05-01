function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины
    item = {id: id, title: title, count: count, price: price}
    let itemCountText = itemCountText + count + ` × ` + price + `₽ =`
    let sum = count * price
    sum = itemCountText + sum
    itemCountText= itemCountText + ` ₽`
    

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
