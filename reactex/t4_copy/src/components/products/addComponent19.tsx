import {useActionState} from "react";
import {postProduct} from "../../api/productsApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import ResultModal from "../common/resultModal.tsx";
import useCustomResult from "../../hooks/useCustomResult.tsx";
import useCustomParam from "../../hooks/useCustomParam.tsx";

async function addProduct(state:unknown, formData:FormData) {

    const res = await postProduct(formData)

    console.log(res, state)

    return res

}

function AddComponent19() {

    const [state, action, isPending ] = useActionState(addProduct, {result:0})

    const { closeAction} = useCustomResult()
    const {moveList} = useCustomParam()

    const closeAll = () => {
        closeAction(()=> {
            moveList()
        })
    }

    return (
        <div>
            <LoadingComponent isLoading={isPending}/>

            {state.result !== 0 &&
            <ResultModal
                show={ true }
                msg={ 'New Product Added ' }
                closeResultModal={closeAll}
            />}

            <form>
                <div>
                    Product Name
                    <input type={'text'} name={'pname'}
                           className={'m-2 border-1 p-2'}
                    />
                </div>
                <div>
                    Product Desc
                    <input type={'text'} name={'pdesc'}
                           className={'m-2 border-1 p-2'}
                    />
                </div>

                <div>
                    Product Price
                    <input type={'number'} name={'price'}
                           className={'m-2 border-1 p-2'}
                    />
                </div>

                <div>
                    Product Files
                    <input type={'file'} name={'files'}
                           multiple={true}
                           className={'m-2 border-1 p-2'}
                    />
                </div>

                <div>
                    <button formAction={action}>ADD</button>
                </div>
            </form>
        </div>
    );
}

export default AddComponent19;