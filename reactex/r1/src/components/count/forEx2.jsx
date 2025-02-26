
function ForEx2() {

    const arr = [
        {no: 1, name: 'AAA', price: 3000},
        {no: 2, name: 'BBB', price: 4000},
        {no: 3, name: 'CCC', price: 7800},
        {no: 4, name: 'DDD', price: 5100},
    ]

    // 배열에 map( )의 결과는 배열. -> JSX의 배열
    // const lis = arr.map(m => <li key ={m.no}>{m.name}</li>)


    function makeLis(arr){
        const result = arr.map(m => <li key ={m.no}>{m.name}</li>)
        return result
    }

    return (
        <div>

            <ul>
                {makeLis(arr)}
            </ul>

        </div>
    );
}


export default ForEx2;