import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h1`
    color: orange;
`;

function Title(){
    return<StyledTitle>Byte Converter</StyledTitle>
}

export default Title;