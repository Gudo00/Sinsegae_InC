import {useState} from "react";

interface ResultComponentProps {
    msg:string,
    closeFn: () => void
}

export default function ResultComponent({msg, closeFn } :ResultComponentProps ) {

    const [showFlag, setShowFlag] = useState(msg && true)

    function getMsg() {
        if(msg === 'D'){
            return 'DELETED............'
        }else if(msg === 'M'){
            return 'MODIFIED...........'
        }else {
            return msg
        }
    }

    if (!showFlag) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
             style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
             onClick={() => {
                 setShowFlag(false)
                 closeFn()
             }}
        >
            <div className="bg-green-500 p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold text-gray-700">{getMsg()}</p>
            </div>
        </div>
    );
}
