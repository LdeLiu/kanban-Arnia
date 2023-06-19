import { StyledButtonDiv, StyledCard, StyledCardComponent, StyledTextComponent, StyledTitle, StyledTitleComponent } from "./style";
import { StyledInputTitle, StyledTextArea } from "../inputCard/style";
import { useState, useEffect } from 'react';
import { Button } from "../buttonsMain/style";

type props = {
    data: {
        title: string;
        content: string;
        column: string;
    }
}



export function Card({data}: props){
    
    const [isEditable,setIsEditable] = useState(false)
    const [inputValue,setInputValue] = useState('')
    const [textAreaValue,setTextAreaValue] = useState('')


    useEffect(()=>{
        setInputValue(data.title)
        setTextAreaValue(data.content)
    },[data])

    const chengeEditable = () => {
        setIsEditable(!isEditable)
    }


    const chengeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
      }
    const chengeTextValue = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(e.currentTarget.value)
      }
    



    return(
        <StyledCardComponent>
            {isEditable ? 
                (<StyledCard>
                    <StyledInputTitle value={inputValue} onChange={chengeInputValue}/>
                    <StyledTextArea value={textAreaValue} onChange={chengeTextValue}/>
                    <StyledButtonDiv>
                        <Button onClick={chengeEditable}><img src="./cancel-svgrepo-com.png" alt="" /></Button>
                        <Button onClick={chengeEditable}><img src="./save.png" alt="" /></Button>
                    </StyledButtonDiv>
                </StyledCard>)
                :
                (<StyledCard>
                    <StyledTitleComponent>
                        <StyledTitle>{inputValue}</StyledTitle>
                        <Button onClick={chengeEditable}><img src="./edit-svgrepo-com.png" alt="" /></Button>
                    </StyledTitleComponent>
                    <StyledTextComponent><span>{textAreaValue}</span></StyledTextComponent>
                    <StyledButtonDiv>
                        {data.column !== 'todo' && <Button onClick={chengeEditable}><img src="./previw.png" alt="" /></Button>}
                        <Button onClick={chengeEditable}><img src="./thresh.png" alt="" /></Button>
                        {data.column !== 'done' && <Button onClick={chengeEditable}><img src="./next.png" alt="" /></Button>}
                    </StyledButtonDiv>
                </StyledCard>)
            }
        </StyledCardComponent>
    )
}