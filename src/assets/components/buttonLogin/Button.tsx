import { StyledButton } from "./style";


type propsType = {
    content: string
    func: ()=>void
}

export function Button({content,func}: propsType){
    return(
        <>
         {content === 'Entrar' && <StyledButton type="button" onClick={func}><b>{content}</b></StyledButton>}
         {content === 'Registrar' && <StyledButton type="button" onClick={func}><b>{content}</b></StyledButton>}
        </>
        // 
    )
}