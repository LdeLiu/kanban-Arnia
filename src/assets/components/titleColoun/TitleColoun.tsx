
type props = {
    type: string
}


export function TitleColoun({type}:props){
    if(type === "todo"){
        return(
            <h3>TO DO</h3>
        )
    }
    if(type === "doing"){
        return(
            <h3>DOING</h3>
        )
    }
    if(type === "done"){
        return(
            <h3>DONE</h3>
        )
    }
}