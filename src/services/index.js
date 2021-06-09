export const calculateDiscount = (quantity, price, discount) => {
    const result =
        quantity * price - ((quantity - (quantity % 3)) / 3) * discount
    return result
}
