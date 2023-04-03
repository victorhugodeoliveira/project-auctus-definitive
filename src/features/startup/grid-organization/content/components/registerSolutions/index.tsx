import React, { useState } from 'react'
import { ContainerRegister, TitleHeadContent, ButtonRegister, SubTitle } from './style'

import  Stage1  from './stage1' 

const RegisterSolutions: React.FC = () => {

  const [stage1, setStage1] = useState(false)

    const handleClick = () => {
      setStage1(true)
    }

  return (
        <ContainerRegister>
           <TitleHeadContent>Cadastre soluções</TitleHeadContent>
           <SubTitle>Uma nova solução em mente?</SubTitle>
           <SubTitle>Mostre a sua solução a todos</SubTitle>
           <ButtonRegister onClick={() => handleClick()}> Agora</ButtonRegister>
        {stage1 === true && <Stage1/>  }
        </ContainerRegister>
  )
}

export default RegisterSolutions