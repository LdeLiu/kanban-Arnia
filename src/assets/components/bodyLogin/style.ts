import styled from 'styled-components'

export const StyledContainer= styled.div`
    background-color: #3A72F8;
    border-radius: 2rem;

    width: 30rem;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
export const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

export const StyledForm = styled.form<{ gap?: string; }>`
    width: 85%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => props.gap ? props.gap : "3rem"};
`