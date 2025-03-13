interface Product {
    pno: number,
    pname: string,
    price: number,
    uploadFileNames: string[]
}
interface CartItem {
    product: Product,
    qty: number
}

interface Cart {
    items: cartItem[]
}