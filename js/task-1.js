function isEnoughCapacity(products, containerSize) {
    let totalProducts = 0;
    for (const product in products) {
        totalProducts += products[product];
    }
    if (totalProducts <= containerSize) {
        return true;
    } else {
        return false;
    }
}