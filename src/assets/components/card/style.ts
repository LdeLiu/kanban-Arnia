import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: #FFFFFF;
    border-radius: 2rem;
    height: 14rem;
    width: 95%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

`
export const StyledCardComponent = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledTitle = styled.h3`
    margin: 0;
`
export const StyledTitleComponent = styled.div`
    padding: 0.5rem 1rem;
    width: 75%;

    font-size: 1rem;
    font-weight: 600;

    display: flex;
    justify-content: space-between;
`
export const StyledTextComponent = styled.div`
    padding: 1rem;

    min-width: 75%;
    max-width: 75%;
    min-height: 6rem;
    max-height: 6rem;
`

export const StyledButtonDiv = styled.div`
    width: 90%;
    box-sizing: border-box;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
`