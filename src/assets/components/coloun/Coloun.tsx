
import { Button } from "../buttonsMain/style";
import { Card } from "../card/Card";
import { StyledCard, StyledCardComponent } from "../card/style";
import { StyledInputTitle, StyledTextArea } from "../inputCard/style";
import { TitleColoun } from "../titleColoun/TitleColoun";
import { StyledColoun } from "./style";

type props = {
    type: string
    
}

const arr = [
    {
        title: "teste",
        content: "teste",
        column: "todo"
    },
    {
        title: "teste1",
        content: "teste1",
        column: "done"
    },
    {
        title: "teste2",
        content: "teste2",
        column: "done"
    },
    {
        title: "teste3",
        content: "teste3",
        column: "done"
    },
    {
        title: "teste4",
        content: "teste4",
        column: "done"
    }
]
// simulando dados recebidos da api

export function Coloun({type}: props){

    return(
        <StyledColoun>
            {type === 'new' && 
                <>
                    <h3>NOVO</h3>
                       <StyledCardComponent>
                            <StyledCard>
                                <StyledInputTitle/>
                                <StyledTextArea />
                                <Button><img src="plus.png" alt="" /></Button>
                            </StyledCard>
                       </StyledCardComponent>
                </>
            }

            {type !== 'new' &&
                <>
                    <TitleColoun type={type}/>
                    {arr.map((elem) => {
                        if(elem.column === 'todo' && type === 'todo'){
                            return(<Card data={elem}/>)
                        }
                        if(elem.column === 'doing' && type === 'doing'){
                            return(<Card data={elem}/>)
                        }
                        if(elem.column === 'done' && type === 'done'){
                            return(<Card data={elem}/>)
                        }
                    })}
                </>
            }
        </StyledColoun>
    )
}