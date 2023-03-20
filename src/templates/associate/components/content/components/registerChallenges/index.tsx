import React, { useState } from 'react'
import { ContainerRegister, TitleHeadContent, ButtonRegister, SubTitle } from './style'

import  Stage1  from './stage1' 

const RegisterChallenges: React.FC = () => {

  const [stage1, setStage1] = useState(false)

    const handleClick = () => {
      setStage1(true)
    }

  return (
        <ContainerRegister>
           <TitleHeadContent>Cadastre desafios</TitleHeadContent>
           <SubTitle>Um novo desafio em mente?</SubTitle>
           <SubTitle>Mostre seu desafio a todos</SubTitle>
           <ButtonRegister onClick={() => handleClick()}> agora</ButtonRegister>
        {stage1 === true && <Stage1/>  }
        </ContainerRegister>
  )
}

export default RegisterChallenges