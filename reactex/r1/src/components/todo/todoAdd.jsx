import axios from "axios";

function TodoAdd() {

    async function handleClick() {
        const data = {title:'Rieat Todo Test', writer:'GD'}

        const res = await axios.post('http://122.34.51.94:8090/api/v1/todos', data)
        console.log(res)
    }
    return (
        <div>

            <button onClick={handleClick}>SEND</button>

        </div>
    );
}

export default TodoAdd;