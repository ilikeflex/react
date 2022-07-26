import { useCallback, useEffect, useState } from "react";
import { MovieType } from "./DataTypes";

export const useCustomHooks = () => {
    const [movies, setMovies]  = useState<MovieType[]>([]); 

    const fetchMoviesHandler = useCallback(async () =>  {
        
        try{
          // Free FireBase API https://react-app-a5e65-default-rtdb.firebaseio.com/ ( login with newtouchme@gmail.com, valid for 30 days )
          // Changed to http://localhost:3000/movies ( local JSON Server )
          const response = await fetch("http://localhost:3000/movies"); // await will wait till the response is received from server
          
          if(!response.ok) {
            const errorMessage = `Server Error Response = ${response.status} ,url = ${response.url}`;
            throw new Error(errorMessage); // No line will be executed after throw
            console.log("Not Executed"); // Unreachable code
          }
    
          if(response.ok) { // No check required..just checking for fun.
            const data = await response.json(); // await will wait till the response.json is completed
    
            //Different ways to declare array in typescript https://stackoverflow.com/questions/38875051/declare-an-array-in-typescript
            let transformdata: MovieType[] = [];

            for (const key in data) {
                var arrayObject:MovieType = {id:'', title:'', releaseDate:new Date(), openingText:''};
                var result = data[key];
                arrayObject.id = key;
                arrayObject.title = result.title;
                arrayObject.releaseDate = new Date(result.release_date);
                arrayObject.openingText = result.openingText;
                transformdata.push(arrayObject);
            }
              setMovies(transformdata); 
          }     
        }
        catch(ex){
          console.log("Unable to Load Movies " + ex);
        }
        
      },[]);

    useEffect(()=> {
        fetchMoviesHandler();
      }, [fetchMoviesHandler])

      return  { movies }

}