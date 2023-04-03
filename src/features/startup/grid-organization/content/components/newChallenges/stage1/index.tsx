import React, {  useState } from 'react'
import CheckBoxComponent from '../../../../../../../components/checkboxComponent'
import CheckBoxOuthersComponent from '../../../../../../../components/checkOutherComponent'
import Stage2 from '../stage2'

import { 
    Container, 
    BoxContent, 
    SubTitleStage, 
    TitleCheckbox,
    CheckboxDiv,
    ButtonStage2,
} 
    from './style'

const Stage1: React.FC = () => {

    // Renderiza o stage2
    const [stage2, setStage2] = useState(false)
    const handleStage2 = () => {
      setStage2(true)
    }

    
    return ( 
        <Container>
            <BoxContent>
            <SubTitleStage>Cultura:</SubTitleStage>
              <CheckboxDiv>
              <TitleCheckbox>Soja</TitleCheckbox>
                <CheckBoxComponent/>
                <TitleCheckbox>Milho</TitleCheckbox>
                <CheckBoxComponent/>
                <TitleCheckbox>Cana</TitleCheckbox>
                <CheckBoxComponent/>
                <TitleCheckbox>Florestal</TitleCheckbox>
                <CheckBoxComponent/>
                <TitleCheckbox>Café</TitleCheckbox>
                <CheckBoxComponent/>
                <TitleCheckbox>Citrus</TitleCheckbox>
                <CheckBoxComponent/>
                <TitleCheckbox>Pecuária corte</TitleCheckbox>
                <CheckBoxComponent/>
              </CheckboxDiv>
              <CheckboxDiv style={{ bottom: 30 }}>
              <TitleCheckbox>Pecuária de leite</TitleCheckbox>
              <CheckBoxComponent/>
                <TitleCheckbox>Outras proteínas</TitleCheckbox>
                <CheckBoxOuthersComponent />
                <TitleCheckbox>Outras culturas</TitleCheckbox>
                <CheckBoxOuthersComponent/>
                <TitleCheckbox>Outros segmentos</TitleCheckbox>
                <CheckBoxOuthersComponent/>
              </CheckboxDiv>
            </BoxContent>
            <ButtonStage2 onClick={() => handleStage2()}>Proximos passos</ButtonStage2>
            {stage2 === true && <Stage2/> }
        </Container>
     );
}
export default Stage1;