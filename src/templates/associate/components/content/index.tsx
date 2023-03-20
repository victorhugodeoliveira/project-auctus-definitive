import React from 'react'

import NewSolutions from './components/newSolutions'
import RegisterChallenges from './components/registerChallenges'

import { AsideContext } from '../aside/config/AsideContext'
import { Container } from './style'

interface ContentProps {
  selectedOption?: string
}

const Content: React.FC<ContentProps> = ({ selectedOption }: ContentProps) => {
  const { state } = React.useContext(AsideContext)

  return (
        <Container>
            {state.selectedOption === 'option1' && <NewSolutions />}
            {state.selectedOption === 'option2' && <RegisterChallenges />}
        </Container>
  )
}

export default Content