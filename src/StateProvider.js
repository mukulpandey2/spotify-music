import {useContext, useReducer, createContext} from 'react'

export const StateContext = createContext();

export const StateProvider = ({intialState, reducer , children}) =>(
    <StateContext.Provider value={useReducer(intialState, reducer)}>
        {children}
    </StateContext.Provider>
);

export const useStateContextValue = () => useContext(StateContext);