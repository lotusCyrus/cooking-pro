import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/pages/home/Home';
import Create from './components/pages/create/Create';
import Recipe from './components/pages/recipe/Recipe';
import Search from './components/pages/search/Search';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route  path="/create" element={<Create />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/recipes/:id" element={<Recipe />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
