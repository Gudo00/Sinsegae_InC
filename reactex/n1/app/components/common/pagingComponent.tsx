'use client'

import React from 'react';

import {useRouter, useSearchParams} from "next/navigation";

function PagingComponent({serverData}: {serverData: PageResponse<any>}) {

    const {pageNumList, prev, next, prevPage, nextPage, current} = serverData

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = (pageNum: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(pageNum))
        router.push(`?${params.toString()}`)
    }


    return (
        <div className="justify-items-center">
            <ul className="flex">

                {prev &&
                    <li key={prevPage} className="p-1 m-1 bg-blue-400 text-white" onClick={() => handleClick(prevPage)}>
                        Prev
                    </li>
                }


                {pageNumList.map( (page, idx) =>
                    <li className={`p-1 m-1 w-10 text-center bg-blue-400 ${current != page ? "text-white" : "text-black"}`} key={page} onClick={() => handleClick(page)}>
                        {page}
                    </li>
                )}

                {next &&
                    <li key={nextPage} className="p-1 m-1 bg-blue-400 text-white" onClick={() => handleClick(nextPage)}>
                        Next
                    </li>
                }

            </ul>
        </div>
    );
}

export default PagingComponent;