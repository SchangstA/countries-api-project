import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url = "https://restcountries.com/v3.1/all"

const Countries = () => {

    const [countries, setCountries] = useState([])

    const fetchCountryData = async() => {
        const res = await fetch(url)
        const countries = await res.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => { 
        fetchCountryData()
    }, [])

    return (
        <>
            <section className='even-columns'>
                {countries.map((country) => {
                    const { 
                        idd, 
                        name, 
                        population, 
                        region, 
                        capital, 
                        flags 
                    } = country

                    return (
                        <article className='flag-container' key={idd}>

                                <div className='image-container'>
                                    <img className='images' src={flags.svg} alt={name.common} />
                                </div>
                                <div className='details'>
                                    <h3>
                                        {name.common}
                                        </h3>
                                    <h4>
                                        Population: <span>{population}</span>
                                        </h4>
                                    <h4>
                                        Region: <span>{region}</span>
                                        </h4>
                                    <h4>
                                        Capital: <span>{capital}</span>
                                        </h4>
                                </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default Countries
