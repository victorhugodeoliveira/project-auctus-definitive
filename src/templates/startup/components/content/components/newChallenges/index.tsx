import React, { useState } from 'react'
import Stage1 from './stage1'
import {  TitleHeadContent, ButtonRegister, ContainerNew, SubTitle } from './style'

const NewChallenges: React.FC = () => {

  const [stage1, setStage1] = useState(false)

    const handleClick = () => {
      setStage1(true)
    }

  return (
         <ContainerNew>
           <TitleHeadContent>Procurando novos desafios?</TitleHeadContent>
           <SubTitle>A procura de um novo desafio?</SubTitle>
           <SubTitle>Não perca tempo!</SubTitle>
           <ButtonRegister onClick={() => handleClick()}>Encontre agora</ButtonRegister>
        {stage1 === true && <Stage1/>  }
        </ContainerNew>       
  )
}

export default NewChallenges