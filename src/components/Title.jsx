import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: gray;
    text-align: center;
    background-color: orange;
`;

function Title(){
    return<StyledTitle>Byte Converter</StyledTitle>
}

export default Title;