import {useParams} from "react-router";
import {useActionState, useEffect, useState} from "react";
import {deleteProduct, getProduct, putProduct} from "../../api/productsApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";


const initState:ProductListDTO = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    delFlag: false,
    uploadFileNames: [],
    files: []
}
const deleteAction = async (state:unknown, formData:FormData)=> {

    const pno = formData.get("pno") as string

    const result = await deleteProduct(pno)

    console.log(state, result)

    return result
}

const modifyAction = async (state:unknown, formData:FormData) => {

    const result = await putProduct(formData)

    console.log(state, result)

    return result

}


function ModifyComponent() {

    const {pno} = useParams()

    const [delState, delAction, delPending ] = useActionState(deleteAction, {RESULT:''})

    const [modState, modAction, modPending ] = useActionState(modifyAction, {RESULT:''})


    const [product, setProduct] = useState<ProductListDTO>(initState)

    useEffect(() => {

        getProduct(Number(pno)).then(data => {
            setProduct(data)
        })

    }, [pno]);

    const hideImage = (fileName: string) => {

        const oldImages = product.uploadFileNames

        const renewalImages = oldImages.filter(img => img !== fileName)

        setProduct(prevState => ({...prevState, uploadFileNames:renewalImages}))

    }


    return (
        <div>

            <LoadingComponent isLoading={delPending || modPending}/>
            {delState.RESULT && <div className={'bg-red-400 text-6xl'}>DELETED</div>}

            {modState.RESULT && <div className={'bg-red-400 text-6xl'}>MODIFIED</div>}

            <form>
                <div>
                    Product Num
                    <input type={'text'} name={'pno'}
                           className={'m-2 border-1 p-2'}
                           readOnly={true}
                           value={product.pno}
                    />
                </div>
                <div>
                    Product Name
                    <input type={'text'} name={'pname'}
                           className={'m-2 border-1 p-2'}
                           readOnly={true}
                           value={product.pname}
                    />
                </div>
                <div>
                    Product Price
                    <input type={'number'} name={'price'}
                           className={'m-2 border-1 p-2'}
                           readOnly={true}
                           value={product.price}
                    />
                </div>
                <div>
                    Product Files
                    <input type={'file'} name={'files'}
                           multiple={true}
                           className={'m-2 border-1 p-2'}
                    />
                    {product.uploadFileNames.map(fileName =>
                            <input type={'hidden'} key={fileName} name={'uploadFileNames'} value={fileName} readOnly={true}/>
                    )}

                </div>
                <div>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        formAction={delAction}
                    >DELETE</button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        formAction={modAction}
                    >MODIFY</button>
                </div>
            </form>

            <ul>
                {product.uploadFileNames.map(fileName => {

                    return (
                        <li key={fileName}>
                            <div>
                                <img src={`http://122.34.51.94:8090/api/products/view/s_${fileName}`}/>
                                <button className={'border-1 m-2 p-2'}
                                        onClick={() => hideImage(fileName)}>DEL</button>
                            </div>
                        </li>
                    )

                })}
            </ul>



        </div>
    );
}

export default ModifyComponent;