import React, { use, useState } from 'react';
import Country from '../Country/country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries=(country, isVisited)=>{
        // console.log(country)
        if(isVisited){
            setVisitedCountries([...visitedCountries, country])
        }else{
            setVisitedCountries(visitedCountries.filter(c => c.cca3.cca3 !== country.cca3.cca3))
        }
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;