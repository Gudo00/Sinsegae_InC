

export default function TodoSerivce() {

    let idx = 0
    let arr = [ ]

    function add(title) {

        const obj = {tno: idx++, title:title}

        arr.push(obj)

        return [...arr]
    }

    function remove(tno = 0) {
        const resultArr = arr.filter(todo => todo.tno != tno )

        arr = resultArr

        return [...arr]
    }

    return {add: add ,  remove: remove }
}