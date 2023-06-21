import { useState } from 'react';
import { Link, Navigate} from 'react-router-dom'

import { StyledBody, StyledContainer, StyledForm } from "../../assets/components/bodyLogin/style";
import { Button } from "../../assets/components/buttonLogin/Button";
import { InputBox } from "../../assets/components/inputBox/InputBox";
import { PageTitle } from "../../assets/components/title/PageTitle";
import { ApiLogin } from '../../services/user';
import { GetCard } from '../../services/cards';


export function Login(){

    type UserTypes = {
        email: string
        password: string
    }

    const [passworld, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [logged,setLogged] = useState(false);

    const chengePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
      }
    const chengeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const chengeLogged = () => {
        setLogged(!logged)
    }

    const data:UserTypes = {
        email: email,
        password: passworld
    }
    
   async function login(){
        const response = await ApiLogin(data)
        console.log(response)
        if(response.statusCode === 200) {
            localStorage.setItem('AUTH_TOKEN',response.responseObject.token)
            localStorage.setItem('NAME',response.responseObject.name)
            chengeLogged()
        }
        if(response.statusCode >= 400 && response.statusCode <= 499){
            alert(response.responseObject.message)
        }

    }

    return(
       <StyledBody>
            <StyledContainer>
                <PageTitle/>
                <StyledForm  action="">
                    <InputBox type="text" label="E-mail" funcao={chengeEmail}/>
                    <InputBox type="password" label="Senha" funcao={chengePassword}/>
                    <Button func={login} content="Entrar"/>
                </StyledForm>
                <button onClick={GetCard}></button>
                <Link to='/register' style={{textDecoration: "none", fontSize: "1.2rem", color: "white"}}>cadastre-se</Link>
            </StyledContainer>
            {logged === true && <Navigate to="/home"/>}
       </StyledBody>
    )
}