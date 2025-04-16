import React, {useEffect} from 'react';
import {useSearchParams} from "react-router";
import {getAccessToken, getMemberWithAccessToken} from "~/api/kakaoAPI";

function KakaoRedirect() {

    const [searchParams] = useSearchParams()

    //code=xsdfsefsef
    const authCode = searchParams.get('code')

    useEffect(() => {

        if(authCode){
            getAccessToken(authCode).then(data => {
                const accessToken = data
                console.log("accessToken" ,accessToken)

                getMemberWithAccessToken(accessToken).then(loginResult => {

                    console.log(loginResult)

                })

            })
        }

    },[authCode])


    if(!authCode) {
        return (<div>로그인 실패</div>)
    }

    return (
        <div>
            <div>이 페이지는 카카오에서 호출해 주는 페이지 입니다</div>
            <div>{authCode}</div>
        </div>
    );
}

export default KakaoRedirect;