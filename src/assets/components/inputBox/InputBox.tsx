import { StyledInput, StyledInputComponent, StyledTextInput } from "./style";
import { ChangeEventHandler } from "react"

type Props = {
    label: string
    funcao: (ChangeEventHandler<HTMLInputElement>)
    type: string
}

export function InputBox({label,funcao,type}: Props){
    
    return(
        <StyledInputComponent>
            <StyledTextInput>{label}</StyledTextInput>
            <StyledInput onChange={funcao} type={type}/>
        </StyledInputComponent>
        
    )
}

// colocar onchande no input, recebendo a função como props: