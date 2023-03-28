import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../recipeList/RecipeList'
import React from 'react'
import Navbar from '../../navbar/Navbar'
export default function Home() {
const {data, isPending, error }=useFetch('http://localhost:3000/recipes')
  return (
    <div>
       <Navbar/>
      {error & <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading....</p>}
      {data && <RecipeList recipes={data} /> }
      
    </div>

  )
}