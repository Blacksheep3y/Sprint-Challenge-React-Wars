import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {StyledButton} from 'styled-components.jsx';

import SWCharCards from "./components/SWCharCards";

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState([])

  useEffect(() => {

    axios
      .get('https://swapi.co/api/people')
      .then(res => setCharacter(res.data.results))
      .catch(err => console.log(err))
  }, [])

  console.log('CHARACTER: ', character)
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {character.map(swCharacter => (
        <>
        <SWCharCards 
        name={swCharacter.name}
        height={swCharacter.height}
        mass={swCharacter.mass}
        />
        {/* <StyledButton>Styled component button</StyledButton> */}
        </>
      ))}
    </div>
  );
}

export default App;
