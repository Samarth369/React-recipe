// [Header: Logo | Nav Links | User Icon]
// ----------------------------------------
// [Hero Section]
//   - Large Search Bar (centered, with filters below)
//   - Optional: Background image of food or subtle gradient
// ----------------------------------------
// [Featured Section] (optional)
//   - Carousel of "Trending" or "Recommended" recipes
// ----------------------------------------
// [Main Content]
//   - Recipe Results Grid (dynamic, updates with search/filters)
//   - Sidebar (optional, for additional filters on desktop)
// ----------------------------------------
// [Footer: Links | Copyright]
import "./style/Home.css";
import Nav from "./componentes/Nav";
import { useContext, useEffect, useRef, useState } from "react";
import context from "./context/context";
import Apiprovider from "./context/api";
import Mealcard from "./componentes/mealcart";

export default function Home() {

    const navref = useRef()

    const { api , meal , setmeal } = useContext(context)
    
    const [ con , setcon ] = useState(false)

    useEffect( () => {
        navref.current.children[0].children[0].focus()
    } , [])
    
    function handlemeal () {
        let val = navref.current.children[0].children[0].value
        navref.current.children[0].children[0].value = null
        if(val != null){
        setmeal(val)
        }
        
        if (!con) {
            setcon(x => true)
        }
    }

    return (
        <>
            <div className="home-block">
                <Nav />

                <div className="recipe">
                    <div className="borderdiv" ref={navref}>
                        <div className="recipe-search">
                            <input type="text" placeholder="Search Recipe" onKeyDown={ (e) => {
                                if (e.key == 'Enter') {
                                    handlemeal()
                                }
                            }}/>
                        </div>

                        <div className="recipe-btn">
                            <button onClick={handlemeal}>Cook</button>
                        </div>
                    </div>
                </div>

                <div className="recipes">
                    {con && <Mealcard />}
                </div>
            </div>
        </>
    );
}
