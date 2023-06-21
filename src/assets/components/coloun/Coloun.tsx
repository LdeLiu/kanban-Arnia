import { useState,useEffect } from 'react';

import { CreateCard, GetCard } from "../../../services/cards";
import { Button } from "../buttonsMain/style";
import { Card } from "../card/Card";
import { StyledCard, StyledCardComponent } from "../card/style";
import { StyledInputTitle, StyledTextArea } from "../inputCard/style";
import { TitleColoun } from "../titleColoun/TitleColoun";
import { StyledColoun } from "./style";

type props = {
    type: string
}
type dataType = {
        _id: string
        title: string
        content: string
        column: string
        userId: string
        __v: number
}

export function Coloun({type}: props){

    const [data,setData] = useState<dataType[]>([])
    const [inputValue,setInputValue] = useState('')
    const [textAreaValue,setTextAreaValue] = useState('')
    const [reload,setReload] = useState(true)

    const chengeReload = () => {
        console.log('reloading...')
        setReload(!reload)
    }
    const chengeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
      }
    const chengeTextValue = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(e.currentTarget.value)
      }
    const chengeCreateCard = ()=>{
        const obj = {
            title: inputValue,
            content: textAreaValue
        }
        CreateCard(obj)
        setInputValue('')
        setTextAreaValue('')
    }
    const chengeData = async () => {
        setData(await GetCard())
    }
    useEffect(()=>{
        chengeData()
    },[reload])

    return(
        <StyledColoun>
            {type === 'new' && 
                <>
                    <h3>NOVO</h3>
                       <StyledCardComponent>
                            <StyledCard>
                                <StyledInputTitle value={inputValue} onChange={chengeInputValue}/>
                                <StyledTextArea value={textAreaValue} onChange={chengeTextValue}/>
                                <Button><img src="plus.png" alt="" onClick={chengeCreateCard}/></Button>
                            </StyledCard>
                       </StyledCardComponent>
                </>
            }

            {type !== 'new' &&
                <>
                    <TitleColoun type={type}/>
                    {data.map((elem,i) => {
                        if(elem.column === 'TODO' && type === 'todo'){
                            return(<Card key={i} data={elem} reload={chengeReload}/>)
                        }
                        if(elem.column === 'DOING' && type === 'doing'){
                            return(<Card key={i} data={elem} reload={chengeReload}/>)
                        }
                        if(elem.column === 'DONE' && type === 'done'){
                            return(<Card key={i} data={elem} reload={chengeReload}/>)
                        }
                    })}
                </>
            }
        </StyledColoun>
    )
}