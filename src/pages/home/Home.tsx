import { Link } from "react-router-dom";
import { StyledHeader, StyledMenu } from "../../assets/components/header/style";
import { PageTitle } from "../../assets/components/title/PageTitle";
import { StyledName } from "./style";
import { StyledBodyHome } from "../../assets/components/bodyHome/style";
import { Coloun } from "../../assets/components/coloun/Coloun";



export function Home(){


    const arr = ["new","todo", "doing", "done"]

    return(
        <>
            <StyledHeader>
                <PageTitle mb="" fs="1.5rem"/>
                <StyledMenu>
                    <StyledName>Olá, Lucas</StyledName>
                    <Link to="/" style={{textDecoration: "none", fontSize: "1.2rem", color: "white"}}>Sair</Link>
                </StyledMenu>
            </StyledHeader>

            <StyledBodyHome>
                {arr.map((type)=>(<Coloun type={type} />))}
            </StyledBodyHome>
        </>
    )
}