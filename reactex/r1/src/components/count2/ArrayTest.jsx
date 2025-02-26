import { useState } from "react";

function ArrayTest() {

    let value = 100;

    const [arr, setArr] = useState([1, 2, 3]);

    const handleClick = () => {
        value++;
        arr.push(value);
        console.log(arr);
        setArr([...arr]);
    };

    return (
        <div className={'flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex-col'}>
            <div onClick={handleClick} className={'border-4 p-6 border-transparent rounded-lg bg-gradient-to-r from-indigo-700 via-blue-800 to-gray-700 hover:bg-gradient-to-r from-indigo-800 via-blue-900 to-gray-800 transition-all duration-300'}>
                <button className='bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-extrabold py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-cyan-400 active:scale-95 active:shadow-xl active:ring-4 active:ring-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-500'>
                    CLICK ME
                </button>
            </div>
            <div className={'bg-gradient-to-r from-teal-600 to-blue-700 w-full mt-8 p-4 rounded-lg'}>
                <ul className={'flex flex-wrap justify-center space-x-6'}>
                    {arr.map((e, idx) => (
                        <li key={idx} className='text-white text-2xl font-bold transform transition-all duration-300 hover:scale-110 hover:text-blue-300'>
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ArrayTest;
