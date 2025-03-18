import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getProduct} from "../../api/productsApi.tsx";
import useCustomParam from "../../hooks/useCustomParam.tsx";

const initState:ProductListDTO = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    delFlag: false,
    uploadFileNames: [],
    files: []
}

function ProductReadComponent() {

    const {pno} = useParams()

    const {moveList, moveRead} = useCustomParam()

    const [product, setProduct] = useState<ProductListDTO>(initState)

    useEffect(() => {

        getProduct(Number(pno)).then(data => {
            setProduct(data)
        })

    }, [pno]);


    return (
        <div>
            <div>Product Read Component </div>

            <div>
                <p>{product.pno}</p>
                <p>{product.pname}</p>
                <p>{product.price}</p>

                <ul>
                    {product.uploadFileNames.map(fileName => {

                        return (
                            <li key={fileName}>
                                <img src={`http://122.34.51.94:8090/api/products/view/${fileName}`}/>
                            </li>
                        )

                    })}
                </ul>
            </div>

            <div className="flex justify-end space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={moveList}
                >List</button>
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => moveRead(product.pno,'modify')}
                >Modify</button>
            </div>
        </div>
    );
}

export default ProductReadComponent;