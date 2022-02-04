import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  
  const [movies, setMovies]  = useState([]); 
  const [isLoading, setIsloading] = useState(false); 
  const [error, setError] = useState(null); 
    
  //Run in Browser https://swapi.dev/api/films/ to see the response
  
  // Step 1
  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //   .then((response) => { return response.json();} )
  //   .then ((data) => { 
  //     let transformdata = data.results.map((result) => {
  //         var arrayObject = {};
  //         arrayObject.id = result.episode_id;
  //         arrayObject.title = result.title;
  //         arrayObject.release = result.release_date;
  //         arrayObject.openingText = result.opening_crawl;
  //         return arrayObject;
  //     });
  //     setMovies(transformdata); } )
  //   .catch( (error) => {
  //     console.error("Unable to Fetch Movies " + error);
  //     }
  //   );
  // }

  //Step 2:
  //Conver to async/await
  //While using async/await ....try/catch is used for error handling
  //fetch api does not throw error while 

  //Axios, on the other hand, this package I mentioned earlier, 
  //this third-party library, which you could use for sending requests, would generate and throw a real error for error status codes

  
  //Fetch API doesn't treat error status codes as real errors. It will not throw a technical error if we get back an error status code.
  //So the problem we have here would not result in an error.

  // async function fetchMoviesHandler() {
  //   setIsloading(true);
  //   try{
  //     const response = await fetch("https://swapi.dev/api/films/"); // await will wait till the response is received from server
      
  //     if(!response.ok) {
  //       const errorMessage = `Server Error Response = ${response.status} ,url = ${response.url}`;
  //       throw new Error(errorMessage); // No line will be executed after throw
  //       console.log("Not Executed"); // Unreachable code
  //     }

  //     if(response.ok) { // No check required..just checking for fun.
  //       const data = await response.json(); // await will wait till the response.json is completed
  //       let transformdata = data.results.map((result) => {
  //           var arrayObject = {};
  //           arrayObject.id = result.episode_id;
  //           arrayObject.title = result.title;
  //           arrayObject.release = result.release_date;
  //           arrayObject.openingText = result.opening_crawl;
  //           return arrayObject;
  //       });
  //     setMovies(transformdata); 
  //     setIsloading(false);
  //     }     

  //   }
  //   catch(ex){
  //     setIsloading(false);
  //     setError("Unable to Load Movies " + ex);
  //   }
    
  // }

//Stpe 3: Add Hooks
//useCallBack and UseEffect
// Notice fetchMoviesHandler does not have any dependency..No external state
const fetchMoviesHandler = useCallback(async () =>  {
    setIsloading(true);
    try{
      // Free FireBase API https://react-app-a5e65-default-rtdb.firebaseio.com/ ( login with newtouchme@gmail.com, valid for 30 days )
      const response = await fetch("https://react-app-a5e65-default-rtdb.firebaseio.com/movies.json"); // await will wait till the response is received from server
      
      if(!response.ok) {
        const errorMessage = `Server Error Response = ${response.status} ,url = ${response.url}`;
        throw new Error(errorMessage); // No line will be executed after throw
        console.log("Not Executed"); // Unreachable code
      }

      if(response.ok) { // No check required..just checking for fun.
        const data = await response.json(); // await will wait till the response.json is completed

        let transformdata = [];
        for (const key in data) {
            var arrayObject = {};
            var result = data[key];
            arrayObject.id = key;
            arrayObject.title = result.title;
            arrayObject.release = result.release_date;
            arrayObject.openingText = result.openingText;
            transformdata.push(arrayObject);
        }
        
      setMovies(transformdata); 
      setIsloading(false);
      }     

    }
    catch(ex){
      setIsloading(false);
      setError("Unable to Load Movies " + ex);
    }
    
  },[]);

  useEffect(()=> {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])


  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch("https://react-app-a5e65-default-rtdb.firebaseio.com/movies.json",{ // await will wait till the response is received from server
      method: "POST",
      body: JSON.stringify(movie), // convert json object to string
      headers : {
        'Content-Type': 'application/json'
      }
      }); 
      const data = await response.json();
      const resultString = `Post Status ${response.status}, Response from Server ${JSON.stringify(data)}`;
      console.log(resultString);
    } catch (ex) {
      
    }    
  }

  let content = <p>No Movies Found</p>;

  if(movies.length>0)
    content = <MoviesList movies={movies}/>;

  if(!!error)  
    content =  <p> {error} </p>;

  if(isLoading)
    content = <p> Loading.....</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;