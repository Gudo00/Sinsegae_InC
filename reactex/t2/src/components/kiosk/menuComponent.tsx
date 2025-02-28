import {useState} from "react";

interface MenuComponentProps {

    menus: Menu[],
    addCart: (mno:number) => void

}

function MenuComponent( {menus, addCart} : MenuComponentProps) {

    const [cat, setCat] = useState('A')

    const showCategory = (cat:string):void => {
        setCat(cat)
    }

    const targetMenus = menus.filter(menu => {
        if(cat === 'A'){
            return true
        }else {
            return menu.category === cat
        }
    })

    const handleClick = (mno:number)=> {

        if(confirm('장바구니에 추가하시겠습니까?') ) {
            console.log(mno)
            addCart(mno)
        }
    }

    const menuLis = targetMenus.map( menu => (menu.category === cat || cat === 'A')  ?
        <div onClick={() => handleClick(menu.mno)}  key={menu.mno} className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={menu.imgName} alt={menu.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{menu.name}</h2>
                <p className="text-gray-600 mt-1 text-lg font-bold">{menu.price}</p>
            </div>
        </div>
        :
        <></>
    )

    return (
        <div>
            <div>Menus</div>
            <div className={'flex m-4 p-2'}>
                <div
                    className={'m-2 p-2 bg-amber-500'}
                    onClick={() => showCategory('A')}
                >All</div>
                <div
                    className={'m-2 p-2 bg-amber-500'}
                    onClick={() => showCategory('C')}
                >Coffee</div>
                <div
                    className={'m-2 p-2 bg-amber-500'}
                    onClick={() => showCategory('D')}
                >Desserts</div>
                <div
                    className={'m-2 p-2 bg-amber-500'}
                    onClick={() => showCategory('G')}
                >Goods</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {menuLis}
            </div>
        </div>
    )

}

export default MenuComponent;