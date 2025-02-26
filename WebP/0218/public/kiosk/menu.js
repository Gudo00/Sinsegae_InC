
function makeMenu() {

    let menus = [
        {mno: 1, mname: 'Americano', price: 2000, img1: '1.jpg', img2 : '2.jpg', cat:'coffee'},
        {mno: 2, mname: 'Latte', price: 2900, img1: '2.jpg', img2 : '2.jpg', cat:'coffee'},
        {mno: 3, mname: 'Espresso', price: 1500, img1: '3.jpg', img2 : '2.jpg', cat:'coffee'},
        {mno: 4, mname: 'Choco Cake', price: 3500, img1: '4.jpg', img2 : '2.jpg', cat:'cake'},
        {mno: 5, mname: 'Macadamia Cookie', price: 2000, img1: '5.jpg', img2 : '2.jpg', cat:'cookie'},
        {mno: 6, mname: 'ChocoChip Cookie', price: 2000, img1: '6.jpg', img2 : '2.jpg', cat:'cookie'}
    ];

    function getMenu(mno) {
        const result = menus.findLast(m => m.mno === mno )
        return result
    }

    function getMenus() {
        return [...menus]
    }

    return {getMenus, getMenu}
}

export function getCategories() {
    return ['A','B','C','D']
}

export function doA(){
    return "A"
}

export default makeMenu