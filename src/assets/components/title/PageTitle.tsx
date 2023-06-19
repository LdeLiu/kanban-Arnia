import { StyledTitle } from "./style";

type props = {
    mb: string
    fs: string
}

export function PageTitle({mb,fs}: props){
    return(
        <StyledTitle mb={mb} fs={fs}>Arnia Trello</StyledTitle>
    )
}