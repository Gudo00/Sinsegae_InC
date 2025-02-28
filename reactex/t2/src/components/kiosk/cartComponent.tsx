

interface CartComponentProps {

    cartItems: CartItem[]
    changeCart: (mno:number, amount:number, del ?:boolean) => void
}


function CartComponent({cartItems, changeCart}: CartComponentProps) {

    let total = 0

    console.log(changeCart)


    const lis = cartItems.map(({menu, qty}:CartItem) => {

        total += menu.price * qty

        return (
            <li key={menu.mno} className={'flex'}>
                <div>
                {menu.name} - {menu.price} - {qty}
                </div>
                <div>
                    <button
                        className={'m-2 p-1 border-1'}
                        onClick={() => changeCart(menu.mno,1)}
                    > + </button>
                    <button
                        className={'m-2 p-1 border-1'}
                        onClick={() => changeCart(menu.mno,-1)}
                    > - </button>
                    <button className={'m-2 p-1 border-1'}
                            onClick={() => changeCart(menu.mno,1,true)}> x </button>
                </div>
            </li>
        )
    })

    return (
        <div>
            <div>Cart</div>

            <div>
                <ul>
                    {lis}
                </ul>
            </div>

            <div>
                <hr/>
                TOTAL: {total}
            </div>

        </div>
    );
}

export default CartComponent;