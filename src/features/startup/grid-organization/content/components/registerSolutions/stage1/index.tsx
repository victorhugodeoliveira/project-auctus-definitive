import React, { useEffect, useState } from 'react'
import Stage2 from '../stage2'

import { 
    Container, 
    BoxContent, 
    SubTitleStage, 
    Checkbox, 
    TitleCheckbox,
    CheckboxDiv,
    TextArea,
    ButtonStage2,
    TextContainer
} 
    from './style'

const Stage1: React.FC = () => {

    const [outhers, setOuthers] = useState(false)

    const handleClick = () => {
        setOuthers(true)
        setOuthers(!outhers)
    }

    useEffect(() => {
      setOuthers
    }, [outhers])

    const [outhers2, setOuthers2] = useState(false)

    const handleClick2 = () => {
        setOuthers2(true)
        setOuthers2(!outhers2)
    }

    useEffect(() => {
      setOuthers2
    }, [outhers2])

    const [outhers3, setOuthers3] = useState(false)

    const handleClick3 = () => {
        setOuthers3(true)
        setOuthers3(!outhers3)
    }

    useEffect(() => {
      setOuthers3
    }, [outhers3])
  

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
                <Checkbox onClick={() => handleClick2()} value="outras culturas" type="checkbox" />
                <TitleCheckbox>Outros segmentos</TitleCheckbox>
                <Checkbox onClick={() => handleClick3()} value="outros segmentos" type="checkbox" />
              </CheckboxDiv>
              <TextContainer></TextContainer>
            <TextContainer>
              {outhers && <TextArea placeholder="Digite aqui outras proteínas..."></TextArea> }
              {!outhers && <div></div>}
           
              {outhers2 && <TextArea placeholder="Digite aqui outras culturas..."></TextArea> }
              {!outhers2 && <div></div>}

              {outhers3 && <TextArea placeholder="Digite aqui outros segmentos..."></TextArea> }
              {!outhers3 && <div></div>}
            </TextContainer>
            </BoxContent>
            <ButtonStage2 onClick={() => handleStage2()}>Proximos passos</ButtonStage2>
            {stage2 === true && <Stage2/> }
        </Container>
     );
}
export default Stage1;