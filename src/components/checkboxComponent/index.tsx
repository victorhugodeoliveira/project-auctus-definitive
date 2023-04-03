import React, { useState } from 'react'
import { 
    Container,
    Checkbox
} from './style'

const CheckBoxComponent: React.FC = () => {


    const [cheking, setCheking] = useState(false);
    const handleCheking = () => {
        setCheking(true)
        setCheking(!cheking);
    }
    return (
            <Container>
                <Checkbox type="checkbox" checked={cheking} onChange={() => handleCheking()}/>
            </Container>
    )
}
export default CheckBoxComponent