import styled from "styled-components";

type teste = {
    mb?: string;
    fs?: string;
}


export const StyledTitle = styled.h1<teste>`
    font-size: ${props => props.fs ? props.fs : "3rem"};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 800;
    
    color: white;
    text-align: center;

    margin-bottom: ${props => props.mb ? props.mb : "3rem"};
`