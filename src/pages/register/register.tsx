import { StyledBody, StyledContainer, StyledForm } from "../../assets/components/bodyLogin/style";
import { Button } from "../../assets/components/buttonLogin/Button";
import { InputBox } from "../../assets/components/inputBox/InputBox";
import { PageTitle } from "../../assets/components/title/PageTitle";
import { StyledText } from "./style";
import { Link } from 'react-router-dom'
import { useState } from 'react';



export function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passworld, setPassworld] = useState('');
    const [confPassworld, setConfPassworld] = useState('');


    const chengeName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const chengeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const chengePasswold = (e: React.FormEvent<HTMLInputElement>) => {
        setPassworld(e.currentTarget.value)
    }
    const chengeConfPassworld = (e: React.FormEvent<HTMLInputElement>) => {
        setConfPassworld(e.currentTarget.value)
    }


    type UserTypes = {
        email: string
        password: string
        name: string
      }

    const data:UserTypes = {
        email: email,
        name: name,
        password: passworld
    }

    return(
        <StyledBody>
            <StyledContainer>
                <PageTitle mb="0rem" fs=""/>
                <StyledText>Cadastro</StyledText>
                <StyledForm gap="1.2rem">
                    <InputBox type="text" label="Nome completo" funcao={chengeName}/>
                    <InputBox type="email" label="E-mail" funcao={chengeEmail}/>
                    <InputBox type="password" label="Senha" funcao={chengePasswold}/>
                    <InputBox type="password" label="Repita sua senha" funcao={chengeConfPassworld}/>
                    <Link to="/">
                        <Button data={data} content="Registrar"/>
                    </Link>
                </StyledForm> 
                <button >teste</button>
            </StyledContainer>
        </StyledBody>
    )
}