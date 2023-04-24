import React, {useState} from 'react'
import { 
    Container,
    ContainerTextArea,
    TextArea,
    CheckBox,
    BoxCheck,
    } 
     from './style'

const CheckOuthers: React.FC = () => {

    const [cheking, setCheking] = useState(false)

    const handleCheking = () => {
        setCheking(true)
        setCheking(!cheking)
    }

    return (
        <Container>
            <BoxCheck>
            <CheckBox type="checkbox" checked={cheking} onChange={handleCheking}/>
            </BoxCheck>
            <ContainerTextArea>
            {cheking == true && <TextArea></TextArea> }
            {!cheking && null}
            </ContainerTextArea>
        </Container>
    )
}

export default CheckOuthers