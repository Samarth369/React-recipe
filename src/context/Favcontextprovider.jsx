import { useState } from "react";
import favcontext from "./favcontext";

export default function Favcontextprovider ({ children }) {

    const [ favrate , setfavrate ] = useState([])
    
    return (
        <>
        <favcontext.Provider value={{ favrate , setfavrate }}>
            {children}
        </favcontext.Provider>
        </>
    )
}


