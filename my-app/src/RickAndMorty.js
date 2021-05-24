import {useEffect, useState} from "react";
import APiHeader from "./APiHeader";

const RickAndMorty = () => {

    const [information, setInformation] = useState({})
    const [person, setPerson] = useState('morty')
    const [inputText, setInputText] = useState('')

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
        <>
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
                            <p className='information__paragraph--grey'>Gender:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[0].gender}</p>)}
                        </div>
                    </div>
                   {information && information.results && (information.results[1].name) &&
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
                            <p className='information__paragraph--grey'>Gender:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[1].gender}</p>)}
                        </div>
                    </div>}
                  {information && information.results && (information.results[2].name) &&
                    <div className='card--flex'>
                        {information && information.results && (<img className='card__img' src={information.results[2].image}/>)}
                        <div className='card__information'>
                            {information && information.results && (
                                <h2 className="information__name"> {information.results[2].name} </h2>)}
                            {information && information.results && (
                                <h5>{information.results[2].status} - {information.results[2].species}</h5>)}
                            <p className='information__paragraph--grey'>Last known location:</p>
                            {information && information.results && (
                                <p className='information__paragraph'>{information.results[2].location.name}</p>)}
                            <p className='information__paragraph--grey'>Gender:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[2].gender}</p>)}
                        </div>
                    </div>}
                    {information && information.results && (information.results[3].name) &&
                    <div className='card--flex'>
                        {information && information.results && (<img className='card__img' src={information.results[3].image}/>)}
                        <div className='card__information'>
                            {information && information.results && (
                                <h2 className="information__name"> {information.results[3].name} </h2>)}
                            {information && information.results && (
                                <h5>{information.results[3].status} - {information.results[3].species}</h5>)}
                            <p className='information__paragraph--grey'>Last known location:</p>
                            {information && information.results && (
                                <p className='information__paragraph'>{information.results[3].location.name}</p>)}
                            <p className='information__paragraph--grey'>Gender:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[3].gender}</p>)}
                        </div>
                    </div>}
                    {information && information.results && (information.results[5].name) &&
                    <div className='card--flex'>
                        {information && information.results && (<img className='card__img' src={information.results[5].image}/>)}
                        <div className='card__information'>
                            {information && information.results && (
                                <h2 className="information__name"> {information.results[5].name} </h2>)}
                            {information && information.results && (
                                <h5>{information.results[5].status} - {information.results[5].species}</h5>)}
                            <p className='information__paragraph--grey'>Last known location:</p>
                            {information && information.results && (
                                <p className='information__paragraph'>{information.results[5].location.name}</p>)}
                            <p className='information__paragraph--grey'>Gender:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[5].gender}</p>)}
                        </div>
                    </div>}
                    {information && information.results && (information.results[4].name) &&
                    <div className='card--flex'>
                        {information && information.results && (<img className='card__img' src={information.results[4].image}/>)}
                        <div className='card__information'>
                            {information && information.results && (
                                <h2 className="information__name"> {information.results[4].name} </h2>)}
                            {information && information.results && (
                                <h5>{information.results[4].status} - {information.results[4].species}</h5>)}
                            <p className='information__paragraph--grey'>Last known location:</p>
                            {information && information.results && (
                                <p className='information__paragraph'>{information.results[4].location.name}</p>)}
                            <p className='information__paragraph--grey'>Gender:</p>
                            {information && information.results && (<p className='information__paragraph'>{information.results[4].gender}</p>)}
                        </div>
                    </div>}
                </div>
            </div>
        </>
        )
    }


export default RickAndMorty