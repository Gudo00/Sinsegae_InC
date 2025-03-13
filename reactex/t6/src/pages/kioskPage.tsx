import {useEffect, useState} from "react";
import useCartStore from "../stores/cartStore.tsx";



const getProducts = async () => {

    const response:Response = await fetch('http://122.34.51.94:8090/api/products/list')

    return response.json()
}


function KioskPage() {

    const [produts, setProduts] = useState([])

    const {items, addCart} = useCartStore()

    useEffect(() => {

        getProducts().then(res => {
            setProduts(res.dtoList)
        })

    }, []);


    return (
        <div>
            <h1>Kiosk Page</h1>
            <div>
                <ul>
                    {produts.map( (p:Product) =>
                        <li key={p.pno} onClick={() => {addCart(p)}}>
                            {p.pno} - {p.pname} - {p.price}
                        </li>)}

                </ul>


            </div>

            <div>
                <hr/>
                <div>Cart Items</div>
                <hr/>

                <ul>
                    {items.map( (item:CartItem, idx:number) =>
                        <li key={idx}>
                            {item.product.pno} - {item.product.pname} - {item.qty}
                        </li>
                    )}
                </ul>

            </div>

        </div>
    );
}

export default KioskPage;