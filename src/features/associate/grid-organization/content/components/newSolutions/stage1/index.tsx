import React, { useState } from 'react'
import Stage2 from '../stage2'

import { 
    Container, 
    BoxContent, 
    SubTitleStage, 
    Checkbox, 
    TitleCheckbox,
    CheckboxDiv,
    TextArea,
    ButtonStage23
} 
    from './style'

const Stage1: React.FC = () => {

    const [outhers, setOuthers] = useState(false)

    const handleClick = () => {
        setOuthers(true)
    }

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
                <Checkbox value="soja" type="checkbox" />
                <TitleCheckbox>Milho</TitleCheckbox>
                <Checkbox value="milho" type="checkbox" />
                <TitleCheckbox>Cana</TitleCheckbox>
                <Checkbox value="cana" type="checkbox" />
                <TitleCheckbox>Florestal</TitleCheckbox>
                <Checkbox value="florestal" type="checkbox" />
                <TitleCheckbox>Café</TitleCheckbox>
                <Checkbox value="cafe" type="checkbox" />
                <TitleCheckbox>Citrus</TitleCheckbox>
                <Checkbox value="citrus" type="checkbox" />
                <TitleCheckbox>Pecuária corte</TitleCheckbox>
                <Checkbox value="pecuaria corte" type="checkbox" />
              </CheckboxDiv>
              <CheckboxDiv style={{ bottom: 30 }}>
              <TitleCheckbox>Pecuária de leite</TitleCheckbox>
                <Checkbox value="pecuaria de leite" type="checkbox" />
                <TitleCheckbox>Outras proteínas</TitleCheckbox>
                <Checkbox onClick={() => handleClick()} value="outras proteinas" type="checkbox" />
                <TitleCheckbox>Outras culturas</TitleCheckbox>
                <Checkbox onClick={() => handleClick()} value="outras culturas" type="checkbox" />
                <TitleCheckbox>Outros segmentos</TitleCheckbox>
                <Checkbox onClick={() => handleClick()} value="outros segmentos" type="checkbox" />
              </CheckboxDiv>
              {outhers === true && <TextArea placeholder="Digite aqui outras..."></TextArea> }

            </BoxContent>
            <ButtonStage23 onClick={() => handleStage2()}>Proximos passos</ButtonStage23>
            {stage2 === true && <Stage2/>}
        </Container>
     );
}
export default Stage1;