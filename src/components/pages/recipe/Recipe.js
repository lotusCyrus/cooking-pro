import { useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import Navbar from '../../navbar/Navbar'
import './Recipe.css'
export default function Recipe() {

const {id}=useParams()
const url='http://localhost:3000/recipes/'+id
const {data:recipe, isPending, error}=useFetch(url)
const navigate=useNavigate()

useEffect(()=>{
if(error){
  setTimeout(()=>{
   navigate('/')
  },2000)
}
},[error,navigate])

  return (
    <div >
          <Navbar />

   
        <div className='recipe'>
        {isPending &&<div>Loading...</div>}
      {recipe &&(
      <>
         <h1 className='page-title'>{recipe.title}</h1>

         <h3>Take{recipe.cookingTime}</h3>
         
         <p className='method'>{recipe.method}</p>
         <ul>
          {recipe.ingredients.map(ing=>(
           <li key={ing}>{ing}</li>
          ))}
         </ul>
         </>
          
      )
      }

      </div>
      </div>

  )
}
