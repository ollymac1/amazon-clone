import React, { createContext, useContext, useReducer } from 'react';

// Initialise the data layer
export const StateContext = createContext();

//App wrapper to provide teh data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Makes data layer available
export const useStateValue = () => useContext(StateContext);
