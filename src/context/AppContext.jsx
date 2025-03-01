import { createContext, useState } from "react";
import React from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    //1.data/states
    const [loading, setLoading]=useState(false);
    const [fetchedData, setFetchedData]=useState(null);
    
    //2.Data filling via api call
    async function fetchData(city) {
        setLoading(true);
        let url=`https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${city}-restaurants&key=AlzaSy_L5Lq0rS2KSq4rZLgITBqLE-RJQprYlAX`;
        
        try {
            const result=await fetch(url);
            const data =await result.json();
            setFetchedData(data.results);
            console.log('data from context ', data.results);
            // console.log(fetchedData);
            
        } catch (error) {
            console.log("Error in fetching Data");
        }
        setLoading(false);
    }

    
    const value={
        loading,
        setLoading,
        fetchData,
        fetchedData, 
        setFetchedData
    }

    return  <AppContext.Provider value={value} >
                {children}
            </AppContext.Provider>

}