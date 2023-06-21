import { StyledButtonDiv, StyledCard, StyledCardComponent, StyledTextComponent, StyledTitle, StyledTitleComponent } from "./style";
import { StyledInputTitle, StyledTextArea } from "../inputCard/style";
import { useState, useEffect } from 'react';
import { Button } from "../buttonsMain/style";
import { ChengeColumn, DeleteCard, EditCard } from "../../../services/cards";

type props = {
    data: {
        _id?: string
        title: string
        content: string
        column?: string
        userId?: string
        __v?: number
    },
    reload: () => void
}

export function Card({data,reload}: props){
    
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
    const chengeColumnNext = ()=>{
        data.column === "TODO" ? ChengeColumn(data,"DOING") : ChengeColumn(data,"DONE")
        reload()
      }
    const chengeColumnPreviw = ()=>{
        data.column === "DONE" ? ChengeColumn(data,"DOING") : ChengeColumn(data,"TODO")
        reload()
      }
    const chengeDeleteCard = ()=>{
        DeleteCard(data)
    }
    const chengeEditCard = ()=>{
        const obj = {
            _id: data._id,
            title: inputValue,
            content: textAreaValue,
            column: data.column
        }
        EditCard(obj)
        chengeEditable()
        reload()
    }
    
    
    return(
        <StyledCardComponent>
            {isEditable ? 
                (<StyledCard>
                    <StyledInputTitle defaultValue={inputValue} onChange={chengeInputValue}/>
                    <StyledTextArea defaultValue={textAreaValue} onChange={chengeTextValue}/>
                    <StyledButtonDiv>
                        <Button onClick={chengeEditable}><img src="./cancel-svgrepo-com.png" alt="" /></Button>
                        <Button onClick={chengeEditCard}><img src="./save.png" alt="" /></Button>
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
                        {data.column !== 'TODO' && <Button onClick={chengeColumnPreviw}><img src="./previw.png" alt="" /></Button>}
                        <Button onClick={chengeDeleteCard}><img src="./thresh.png" alt="" /></Button>
                        {data.column !== 'DONE' && <Button onClick={chengeColumnNext}><img src="./next.png" alt="" /></Button>}
                    </StyledButtonDiv>
                </StyledCard>)
            }
        </StyledCardComponent>
    )
}