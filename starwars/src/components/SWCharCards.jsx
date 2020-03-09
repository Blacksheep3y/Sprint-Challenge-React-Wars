import React from 'react';
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

const SWCharCards = (props) => {
    return(
        <div>
        {/* propsToButton={props} */}
            <p>Name: {props.propsToButton.name}</p>
            <p>Height: {props.propsToButton.height}</p>
            <p>Mass: {props.propsToButton.mass}</p>
            <Button />
        </div>
    )
}

export default SWCharCards;