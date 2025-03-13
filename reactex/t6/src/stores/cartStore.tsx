import {create} from "zustand";

interface CartState {
    items: CartItem[],
    addCart: (product:Product) => void

}

const useCartStore =
    create<CartState>((set) => ({
        items: [],
        addCart:(product:Product) => set( (state) => {

            const oldItems:CartItem[] = state.items

            const targetItems:CartItem[] = oldItems.filter(item => item.product.pno === product.pno)

            let result:CartItem[]

            if(targetItems.length > 0) {
                targetItems[0].qty += 1
                result = [...state.items]
            }else {
                result = [...state.items, {product, qty:1}]
            }

            return {items:result}
        })
    }))

export default useCartStore