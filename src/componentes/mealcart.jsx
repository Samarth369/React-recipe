import '../style/mealcart.css'
import { useContext } from 'react'
import context from '../context/context'
import { Link } from 'react-router-dom'

export default function Mealcard () {
    const { api , meal , setmeal } = useContext(context)

    function Card ({x}) {
        
        return (
            <>
            <div className="card">
                <Link to={"/recipe"} state={{data : {x}}}>
                <img src={x.strMealThumb} alt="" />
                <p>{x.strMeal}</p>
                </Link>
            </div>
            </>
        )
    }

        
    return (
        <>
        <div className="cart-block">
        {
        api.meals && api.meals.map(( x , index ) => <Card key={index} x={x}/>) 
        }
        </div>
        </>
    )
} 