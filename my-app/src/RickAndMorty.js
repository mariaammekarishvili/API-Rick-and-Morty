import {useEffect, useState} from "react";
import APiHeader from "./APiHeader";

const RickAndMorty = () => {

    const [information, setInformation] = useState({})
    const [person, setPerson] = useState('morty')
    const [inputText, setInputText] = useState('')

    console.log(information)

    useEffect(() => {
        getInformationData(person).then(informationData => {
            setInformation(informationData)
        })
    }, [person])


    const getInformationData = async (person) => {
        const request = await fetch(`https://rickandmortyapi.com/api/character/?page=2&name=${person}`)
        return await request.json();
    };

    const changeInputText = (e) => {
        setInputText(e.target.value)
    }

    const changePerson = () => {
        setPerson(inputText)
        setInputText('')
    }


        return (
            <div className='main'>
                <APiHeader/>
                <div className='main__search-bar'>
                    <input type="text" value={inputText} onChange={changeInputText} className='search__input'/>
                    <input onClick={changePerson} className='search__button' type="button" value='SEARCH'/>
                </div>
                <div className='main__section--flex'>
                    <div className='card--flex'>
                        {information && information.results && (<img className='card__img' src={information.results[0].image}/>)}
                        <div className='card__information'>
                            {information && information.results && (
                                <h2 className="information__name"> {information.results[0].name} </h2>)}
                            {information && information.results && (
                                <h5>{information.results[0].status} - {information.results[0].species}</h5>)}
                            <p className='information__paragraph--grey'>Last known location:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[0].location.name}</p>)}
                            <p className='information__paragraph--grey'>First seen in:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[0].location.name}</p>)}
                        </div>
                    </div>

                    <div className='card--flex'>
                        {information && information.results && (<img className='card__img' src={information.results[1].image}/>)}
                        <div className='card__information'>
                            {information && information.results && (
                                <h2 className="information__name"> {information.results[1].name} </h2>)}
                            {information && information.results && (
                                <h5>{information.results[1].status} - {information.results[1].species}</h5>)}
                            <p className='information__paragraph--grey'>Last known location:</p>
                            {information && information.results && (
                                <p className='information__paragraph'>{information.results[1].location.name}</p>)}
                            <p className='information__paragraph--grey'>First seen in:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[0].location.name}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default RickAndMorty