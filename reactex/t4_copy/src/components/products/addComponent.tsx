import {ChangeEvent, useRef, useState} from "react";
import {postProduct} from "../../api/productsApi.tsx";
import useCustomParam from "../../hooks/useCustomParam.tsx";
import useCustomResult from "../../hooks/useCustomResult.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import ResultModal from "../common/resultModal.tsx";


const initState:ProductAdd = {
    pname:'',
    pdesc:'',
    price:0
}

function AddComponent() {

    const [product, setProduct] = useState<ProductAdd>(initState)

    const {moveList, loading,setLoading} = useCustomParam()
    const {msg, result, openModal, closeAction} = useCustomResult()


    const uploadRef = useRef<HTMLInputElement | null>(null)

    const change = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setProduct(prevState => ({...prevState, [name]:value }) )
    }

    const handleClick = () => {

        if(!uploadRef.current?.files ||uploadRef.current?.files.length === 0 ){
            alert("첨부파일 필요")
            return
        }

        const files = uploadRef.current.files
        console.log(files)

        const formData = new FormData()

        for(let i = 0; i < files.length; i++) {
            formData.append("files", files[i])
        }

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", String(product.price))

        setLoading(true)

        postProduct(formData).then(data => {
            setLoading(false)
            console.log(data)
            openModal(`New Product ${data.result} Added`)
        })


    }

    const closeAll = () => {
        closeAction(()=> {
            moveList()
        })
    }

    return (
        <div>
            <LoadingComponent isLoading={loading}/>

            <ResultModal
                show={ result }
                msg={ msg }
                closeResultModal={closeAll}
            />
            <div>
                Product Name
                <input type={'text'} name={'pname'}
                       className={'m-2 border-1 p-2'}
                       value={product.pname}
                       onChange={change}
                />
            </div>
            <div>
                Product Desc
                <input type={'text'} name={'pdesc'}
                       className={'m-2 border-1 p-2'}
                       value={product.pdesc}
                       onChange={change}
                />
            </div>

            <div>
                Product Price
                <input type={'number'} name={'price'}
                       className={'m-2 border-1 p-2'}
                       value={product.price}
                       onChange={change}
                />
            </div>

            <div>
                Product Files
                <input type={'file'} name={'files'}
                       multiple={true}
                       className={'m-2 border-1 p-2'}
                       ref={uploadRef}
                />
            </div>

            <div className="flex justify-end space-x-4">
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={handleClick}
                >Add</button>
            </div>

        </div>
    );
}

export default AddComponent;