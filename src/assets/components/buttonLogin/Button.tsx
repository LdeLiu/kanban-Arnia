import { ApiLogin, ApiRegister } from "../../../services/user";
import { StyledButton } from "./style";


type propsType = {
    content: string
    data: {
        email: string
        password: string
        name?: string
    }
}

export function Button({content,data}: propsType){
    return(
        <>
         {content === 'Entrar' && <StyledButton type="button" onClick={() => {ApiLogin(data)}}><b>{content}</b></StyledButton>}
         {content === 'Registrar' && <StyledButton type="button" onClick={() => {ApiRegister(data)}}><b>{content}</b></StyledButton>}
        </>
        // 
    )
}