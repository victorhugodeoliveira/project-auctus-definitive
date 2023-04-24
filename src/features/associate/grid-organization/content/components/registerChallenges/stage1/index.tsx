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
    TextContainer,
    NameSolution,
    InputName
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
            <NameSolution>Nome da Solução: </NameSolution>
            <InputName type="text" name="name-solution" placeholder="Digite o nome da solução"/>
            <SubTitleStage>Cultura:</SubTitleStage>
              <CheckboxDiv>
              <TitleCheckbox>Soja</TitleCheckbox>
                <Checkbox id="soja" value="soja" type="checkbox" />
                <TitleCheckbox>Milho</TitleCheckbox>
                <Checkbox id="milho" value="milho" type="checkbox" />
                <TitleCheckbox>Cana</TitleCheckbox>
                <Checkbox id="cana" value="cana" type="checkbox" />
                <TitleCheckbox>Florestal</TitleCheckbox>
                <Checkbox id="florestal" value="florestal" type="checkbox" />
                <TitleCheckbox>Café</TitleCheckbox>
                <Checkbox id="cafe" value="cafe" type="checkbox" />
                <TitleCheckbox>Citrus</TitleCheckbox>
                <Checkbox id="citrus" value="citrus" type="checkbox" />
                <TitleCheckbox>Pecuária corte</TitleCheckbox>
                <Checkbox id="pecuaria-corte" value="pecuaria corte" type="checkbox" />
              </CheckboxDiv>
              <CheckboxDiv style={{ bottom: 65 }}>
              <TitleCheckbox>Pecuária de leite</TitleCheckbox>
                <Checkbox id="pecuaria-leite" value="pecuaria de leite" type="checkbox" />
                <TitleCheckbox>Outras proteínas</TitleCheckbox>
                <Checkbox onClick={() => handleClick()} id="outras-proteinas" value="outras proteinas" type="checkbox" />
                <TitleCheckbox>Outras culturas</TitleCheckbox>
                <Checkbox onClick={() => handleClick2()} id="outras-culturas" value="outras culturas" type="checkbox" />
                <TitleCheckbox>Outros segmentos</TitleCheckbox>
              <Checkbox onClick={() => handleClick3()} id="outros-segmentos" value="outros segmentos" type="checkbox" />
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