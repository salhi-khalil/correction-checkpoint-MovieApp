import {useState} from 'react';

import "./App.css";

import Add from './Components/Add';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import Navbar from './Components/Navbar';
import {movies} from './Components/movies';

//console.log(movies);
function App() {
  
 const [movieList,setmovieList]=useState(movies)
// function for adding a new movie

const addHandler= (newMovie)=> {
  setmovieList([...movieList,newMovie])
}
 // get the data from the user by taping
   
 const [search,setsearch] = useState("")

 // get the data from the user by giving the rate
   
 const [rating,setrating] = useState(1)


 

  return (
    <div className="App">
   <Navbar/>
   <Filter setsearch={setsearch}  rating ={rating} setrating={setrating}      />
   <Add addHandler= {addHandler} />
   <MovieList movieList= {movieList} search = {search} rating={rating} />
    </div>
  );
}

export default App;
