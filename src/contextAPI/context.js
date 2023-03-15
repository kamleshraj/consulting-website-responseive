import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
const AppContext = React.createContext()
const intialState = {
    name: "",
    image: "",
    authName:"",
    services: [],
};
const API='https://course-api.com/react-useReducer-cart-project'
const AppProvider = ({ children }) => {
   
    const updateHome = () => {
        return dispatch({
            type: 'HOME_UPDATE',
            payload: {
                name: 'The Learning is Life',
                authName:'Rana Pratap',
                image:'./images/hero.svg'
            }
        })
    }
    const updateAboutus = () => {
        return (
            dispatch({
                type: 'ABOUTUS_UPDATE',
                payload: {
                    name: 'Learning the Reactjs with Live Project',
                    image:'./images/about1.svg'
                }
            })
        )
    }
    //services data
    const getServices = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({
                type: 'GET_SERVICES',
                payload:data
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getServices(API)
    }, [])

    const [state, dispatch] = useReducer(reducer, intialState)
    
    return(
    <AppContext.Provider value={{...state,updateHome, updateAboutus,getServices}}>
        {children}
    </AppContext.Provider>
    )
}

//global custom hook
const useGlobalContext = () => {
    return useContext(AppContext)
}

export{AppContext,AppProvider,useGlobalContext}