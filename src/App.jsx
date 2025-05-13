import './style/App.css'
import { BrowserRouter , Router , Route, Routes } from 'react-router-dom'
import Home from './Home'
import Recipe from './Recipe'
import Apiprovider from './context/api'
import Favcontextprovider from './context/Favcontextprovider'
import Fav from './Favrate'
import FavRecipe from './FavRecipe'

function App() {

  return (
    <>
    <Favcontextprovider>
    <Apiprovider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/recipe' element={<Recipe />}/>
          <Route path='/favrate' element={<Fav />}/>
          <Route path='/favrate-recipe' element={<FavRecipe />} />
        </Routes>
      </BrowserRouter>
    </Apiprovider>
    </Favcontextprovider>
    </>
  )
}

export default App
