

export default function cart() {

    let items = [] //장바구니 상품들

    //메뉴 객체를 파라미터로 받아서 처리
    function add (menu) {

        const {mno,mname,price} = menu

        // 만일 기존의 mno에 해당하는 것이 있다면 "수량 변경"

        const old = items.filter(item => item.mno === mno)

        if(old.length > 0){
            old[0].qty += 1
        }else{
            // 없다면 cartItem에 "추가"

            const cartItem = {mno:mno, mname:mname,price:price, qty: 1}

            items.push(cartItem)

        }

        return [...items]
    }

    function getItems () {
        return [...items]
    }

    return {getItems, add}
}