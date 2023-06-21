import { Navigate } from 'react-router-dom'
import { useState } from 'react';

import { StyledBody, StyledContainer, StyledForm } from "../../assets/components/bodyLogin/style";
import { Button } from "../../assets/components/buttonLogin/Button";
import { InputBox } from "../../assets/components/inputBox/InputBox";
import { PageTitle } from "../../assets/components/title/PageTitle";
import { StyledText } from "./style";
import { ApiRegister } from "../../services/user";
import { emailVerify, passworldVerify } from "../../services/functions";



export function Register(){

    type UserTypes = {
        email: string
        password: string
        name: string
        confPassword: string
      }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [registred,setRegistred] = useState(false);


    const chengeName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const chengeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const chengePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const chengeConfPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setConfPassword(e.currentTarget.value)
    }
    const chengeRegistred = () => {
        setRegistred(!registred)
    }

    const data:UserTypes = {
        email: email,
        name: name,
        password: password,
        confPassword: confPassword
    }

    async function register(){
        if(emailVerify(data)){
            if(passworldVerify(data)){
                const response = await ApiRegister(data)
                if(response.statusCode === 201) {
                    alert("Registrado com sucesso!")
                    chengeRegistred()
                }
                if(response.statusCode >= 500 && response.statusCode <= 599){
                    alert("Ops, houve um problema no registro")
                }
            }
            return(alert('as senhas devem ser iguais!'))
        }
        return(alert('Email invalido!'))
    }

    return(
        <StyledBody>
            <StyledContainer>
                <PageTitle mb="0rem" fs=""/>
                <StyledText>Cadastro</StyledText>
                <StyledForm gap="1.2rem">
                    <InputBox type="text" label="Nome completo" funcao={chengeName}/>
                    <InputBox type="email" label="E-mail" funcao={chengeEmail}/>
                    <InputBox type="password" label="Senha" funcao={chengePassword}/>
                    <InputBox type="password" label="Repita sua senha" funcao={chengeConfPassword}/>
                        <Button func={register} content="Registrar"/>
                </StyledForm> 
            </StyledContainer>
            {registred === true && <Navigate to="/"/>}
        </StyledBody>
    )
}