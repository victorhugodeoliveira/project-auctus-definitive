import React, { useState } from 'react'
import { 
    Container,
    CheckboxDiv,
    Checkbox,
    TextArea,
    TextContainer,
} from './style'

const CheckBoxOuthersComponent: React.FC = () => {


    const [cheking, setCheking] = useState(false);
    const handleCheking = () => {
        setCheking(true)
        setCheking(!cheking);

    }
    return (
        <>
         <Container>
                <CheckboxDiv>
                <Checkbox type="checkbox" checked={cheking} onChange={() => handleCheking()}/>
                </CheckboxDiv>
            </Container>          
              <TextContainer>
              {cheking === true && <TextArea/>}
          </TextContainer>  
        </>
    )
}
export default CheckBoxOuthersComponent