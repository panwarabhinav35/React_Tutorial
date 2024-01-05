import { useState } from "react"

const ContriesDropDown=()=>{
    const countries=["Select Country","India","America","Australia"]
    const indianCities=["Select City","Delhi","Mumbai","Agra"]
    const americanCities=["Select City","Los Angeles","Los vegas"," California"]
    const australianCities=["Select City","Sidney","Perth","Mellbourne"]
    const [selectedCity,setselectedCity]=useState(["Select City"]);
    const [selectCountry,setselectCountry]=useState("Select Country")
    const handleOnChange=(e)=>{
        if(e.target.value==="Select Country"){
            setselectedCity(["Select City"])
            setselectCountry(e.target.value)
        }

        else if(e.target.value==="America"){
            setselectedCity(americanCities)
            setselectCountry(e.target.value)
        }
        else if(e.target.value==="India"){
            setselectedCity(indianCities)
            setselectCountry(e.target.value)
        }
        else if(e.target.value==="Australia"){
            setselectedCity(australianCities)
            setselectCountry(e.target.value)
        }
    }
    return(
        <>
        <select onChange={handleOnChange}>
            {countries.map(country=>(<option  key={country} value={country}>{country}</option>))}
        </select>
        <select disabled={selectCountry==="Select Country"}>
            {selectedCity.map(city=>(<option  key={city} value={city}>{city}</option>))}
        </select>

        </>
    )
}
export default ContriesDropDown;