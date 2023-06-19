import { StyledBody, StyledContainer, StyledForm } from "../../assets/components/bodyLogin/style";
import { Button } from "../../assets/components/buttonLogin/Button";
import { InputBox } from "../../assets/components/inputBox/InputBox";
import { PageTitle } from "../../assets/components/title/PageTitle";
import { useState } from 'react';
import { Link } from 'react-router-dom'

export function Login(){

    const [passworld, setPassworld] = useState('');
    const [email, setEmail] = useState('');


    const chengePasswold = (e: React.FormEvent<HTMLInputElement>) => {
        setPassworld(e.currentTarget.value)
      }
    const chengeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    

    type UserTypes = {
        email: string
        password: string
      }

    const data:UserTypes = {
        email: email,
        password: passworld
    }



    return(
       <StyledBody>
            <StyledContainer>
                <PageTitle mb="" fs=""/>
                <StyledForm  action="">
                    <InputBox type="text" label="E-mail" funcao={chengeEmail}/>
                    <InputBox type="password" label="Senha" funcao={chengePasswold}/>
                        <Button data={data} content="Entrar"/>
                    {/* <Link to="/home">
                    </Link>   */}
                </StyledForm>
                <Link to='/register' style={{textDecoration: "none", fontSize: "1.2rem", color: "white"}}>cadastre-se</Link>
            </StyledContainer>
       </StyledBody>
    )
}