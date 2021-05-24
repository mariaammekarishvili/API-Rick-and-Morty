import cower from './rick.png'

const APiHeader = () => {
    return(
        <>
            <img  className='header__img' src={cower}/>
            <h1 className='header__title'>Rick and Morty</h1>
        </>
    )
}

export default APiHeader