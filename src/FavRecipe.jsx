import './style/Recipe.css'
import { useLocation, useNavigate } from "react-router-dom"
import Nav from './componentes/Nav'
import favcontext from './context/favcontext'
import { useContext, useState } from 'react'

export default function FavRecipe () {      
    const { favrate , setfavrate } = useContext(favcontext)

    const navigate = useNavigate()
    const [ infav , setinfav ] = useState(true)
    const location = useLocation()
    const {data} = location.state
    let x = data.x
    
    let ingredient = Object.values(x).slice(9,29)
    let measure = Object.values(x).slice(29,49)
    let ingredientlist = []
    let measurelist = []
    for (let i in ingredient) {
        if (ingredient[i] != '') {
            ingredientlist.push(ingredient[i])
            measurelist.push(measure[i])
        } else {
            break
        }
    }

    function addfav () {
        if (infav) {
            setfavrate(xx => [...xx , x])
            setinfav(x => !x)
        }
    }

    return (
        <>
        <Nav />
        <div className="mainRecipe">
            <div className="title">
                    <h1>{x.strMeal}</h1>
                    </div>
            <div className="block1">

                <div className="block2">
                    
            
                    <div className="imgdiv">
                    <img src={x.strMealThumb} alt="" />
                    </div>
                </div>
        
            <div className="ingredient">
        
                <div className="ingredient-block">
                    <div className="ingredientlist">
                        <p>Ingredients</p>
                        <ul>
                            {ingredientlist.map(( x , index) => <li key={index}>{x}</li>)}
                        </ul>
                    </div>
                    <div className="measurelist">
                        <p>Measure</p>
                        <ul>
                            {measurelist.map(( x , index) => <li key={index}>{x}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

            </div>
        
            <div className="yt">
                <a href={x.strYoutube}>Youtube Video is here</a>
            </div>

            <div className="instructions">
                <h1>Instructions</h1>
                {x.strInstructions}
            </div>
        </div>
        </>
    )
}