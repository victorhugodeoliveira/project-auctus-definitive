import React from 'react'

import NewChallenges from './components/newChallenges'
import RegisterSolutions from './components/registerSolutions'

import { AsideContext } from '../aside/config/AsideContext'
import { Container } from './style'

interface ContentProps {
  selectedOption?: string
}

const Content: React.FC<ContentProps> = ({ selectedOption }: ContentProps) => {
  const { state } = React.useContext(AsideContext)

  return (
        <Container>
            {state.selectedOption === 'option1' && <NewChallenges />}
            {state.selectedOption === 'option2' && <RegisterSolutions />}
        </Container>
  )
}

export default Content