import { useEffect, useState } from "react";
import context from "./context";

export default function Apiprovider ({children}) {

    const [ api , setapi ] = useState([])
    const [ meal , setmeal ] = useState()
    
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(res => setapi(res))
    } , [meal])

    return (
        <>
        <context.Provider value={{api , meal , setmeal}}>
            {children}
        </context.Provider>
        </>
    )
}







