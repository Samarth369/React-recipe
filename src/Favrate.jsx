import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import favcontext from './context/favcontext';
import Nav from './componentes/Nav';
import './style/favrate.css'

export default function Fav () {

    const { favrate , setfavrate } = useContext(favcontext)
    
    function Card ({ x }) {
        console.log(x);
        return (
            <>
            <div className="card">
                <Link to={"/favrate-recipe"} state={{data : {x}}}>
                <img src={x.strMealThumb} alt="" />
                <p>{x.strMeal}</p>
                </Link>
            </div>
            </>
        )
    }

    return (
        <>
          <Nav />
          {favrate.map(( x , index ) => <Card key={index} x={x}/>)}
        </>
    )
}