import MenuComponent from "./menuComponent.tsx";
import CartComponent from "./cartComponent.tsx";
import {useState} from "react";

function KioskContainer() {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    console.log(cartItems, setCartItems)

    const menuArr: Menu[] = [
        {mno: 1, name:'Drip Coffee', price: 4000, imgName:'M1.jpg', category:'C'},
        {mno: 2, name:'Latte', price: 5000, imgName:'M2.jpg', category:'C'},
        {mno: 3, name:'Apple Cake', price: 7000, imgName:'M3.jpg', category:'D'},
        {mno: 4, name:'Key Ring', price: 3000, imgName:'M4.jpg', category:'G'},
        {mno: 5, name:'Cake', price: 7000, imgName:'M3.jpg', category:'D'},
        {mno: 6, name:'Drip Bag', price: 3000, imgName:'M4.jpg', category:'G'},
    ]

    //메뉴 컴포넌트에서 특정 메뉴를 클릭했을때 호출하는 함수
    const addCart = (mno: number) => {

        const targetMenu = menuArr.filter(menu => menu.mno === mno)[0]
        console.log(targetMenu)

        //cartItems에서 해당 메뉴가 있는지 확인

        const resultArr:CartItem[] = cartItems.filter( item => item.menu.mno === mno)

        console.log(resultArr)

        //없다면 cartItems에 추가
        if(resultArr.length === 0) {
            cartItems.push( {menu:targetMenu , qty: 1} )
        }else {
            resultArr[0].qty += 1
        }
        setCartItems([...cartItems])
    }

    const changeCart = (mno: number, amount:number, del:boolean) => {

        //카트에서 삭제
        if(del){
            setCartItems([ ...cartItems.filter(item => item.menu.mno !== mno) ])
            return
        }

        const cartItem:CartItem = cartItems.filter( item => item.menu.mno === mno)[0]
        cartItem.qty += amount
        setCartItems([...cartItems])
    }



    return (
        <div className={'flex h-full'}>

            <div className={'w-2/3 h-full bg-orange-200 p-10'}>
                <MenuComponent menus={menuArr} addCart={addCart}></MenuComponent>
            </div>
            <div className={'w-1/3 h-full bg-green-200 p-10'}>
                <CartComponent
                    cartItems={cartItems}
                    changeCart={changeCart}></CartComponent>
            </div>

        </div>
    );
}

export default KioskContainer;