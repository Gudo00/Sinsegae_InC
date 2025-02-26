
function ForEx() {

    const arr = [

        // 배열을 map을 이용해서 JSX로 바꾸는 것 - 동적으로 생성되는 JSX
        // React 처리시에 모든 JSX는 고유한 ID - 내부적으로 사용
        // 동적으로 하다보면 ID를 생성할 수 없으므로 개발자가 의미 부여

        {no: 1, name: 'AAA', price: 3000},
        {no: 2, name: 'BBB', price: 4000},
        {no: 3, name: 'CCC', price: 7800},
        {no: 4, name: 'DDD', price: 5100},

    ]

    return (
        <div>
            <ul>
                {arr.map(m => <li key = {m.no}>
                    {m.name} --
                    {m.price}
                </li>)}
            </ul>

            <ul>
                {arr.map((m, idx) => <li key = {idx}>
                    {m.name} --
                    {m.price}
                </li>)}
            </ul>


        </div>
    );
}

export default ForEx;