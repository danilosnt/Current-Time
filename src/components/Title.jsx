import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h1`
    color: black;
    text-align: center;
    font-size: 300%;
`;

function Title(){
    return(
        <StyledTitle>The Current Time is...</StyledTitle>
    )
}

export default Title;