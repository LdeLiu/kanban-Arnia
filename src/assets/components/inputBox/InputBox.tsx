import { ChangeEventHandler } from "react"

import { StyledInput, StyledInputComponent, StyledTextInput } from "./style";

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
