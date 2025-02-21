

export default function TodoSerivce() {

    let idx = 0
    let arr = [ ]

    function add(title) {

        const obj = {tno: idx++, title:title}

        arr.push(obj)

        return [...arr]
    }

    function remove() {  }

    return {add: add ,  remove: remove }
}