
interface Menu {
    mno: number,
    name: string,
    price: number,
    imgName ?: string,
    category: string,
    show ?: boolean
}

interface CartItem {
    menu: Menu,
    qty: number
}