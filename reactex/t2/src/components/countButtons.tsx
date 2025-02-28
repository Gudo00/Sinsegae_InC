
interface CountButtonsProps {
    change: ( amount : number ) => void
}

function CountButtons({ change } :CountButtonsProps) {

    console.log(change)

    return (
        <div className={'border-1 m-2 p-2'}>
            <button
                className={'m-4 p-4 border-1 '}
                onClick={() => { change(1) }}
            > +  </button>
            <button
                className={'m-4 p-4 border-1 '}
                onClick={() => { change(-1) }}
            > -  </button>
        </div>
    );
}

export default CountButtons;