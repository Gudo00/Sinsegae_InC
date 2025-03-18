import useCustomParam from "../../hooks/useCustomParam.tsx";
import {useEffect, useState} from "react";
import {getProductsList} from "../../api/productsApi.tsx";
import PageComponent from "../common/pageComponent.tsx";


const initState:PageResponse2<ProductListDTO> = {
    dtoList: [],
    next: false,
    prev: false,
    current: 0,
    nextPage: 0,
    pageNumList: [],
    prevPage: 0,
    totalPage: 0
}

const host = import.meta.env.VITE_API_SERVER


function ListComponent() {

    const {page,size,refresh, moveRead,movePage} = useCustomParam()

    const [serverData, setServerData] = useState(initState)

    useEffect(() => {

        getProductsList(page,size).then(data => {
            setServerData(data)
        })

    }, [page,size,refresh]);

    console.log(serverData)

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

            <div className="flex flex-wrap mx-auto p-6">

                {serverData.dtoList.map(product =>

                    <div
                        key= {product.pno}
                        className="w-1/2 p-1 rounded shadow-md border-2 border-gray-300"
                        onClick={() => moveRead(product.pno)}
                    >

                        <div className="flex flex-col  h-full">
                            <div className="font-extrabold text-2xl p-2 w-full ">
                                {product.pno}
                            </div>
                            <div className="text-1xl m-1 p-2 w-full flex flex-col">

                                <div className="w-full overflow-hidden ">
                                    <img alt="product"
                                         className="m-auto rounded-md w-60"
                                         src={`${host}/products/view/s_${product.uploadFileNames[0]}`}/>
                                </div>

                                <div className="bottom-0 font-extrabold bg-white">
                                    <div className="text-center p-1">
                                        이름: {product.pname}
                                    </div>
                                    <div className="text-center p-1">
                                        가격: {product.price}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>

            <PageComponent serverData={serverData} moveListPage={movePage}></PageComponent>

        </div>
    );
}

export default ListComponent;