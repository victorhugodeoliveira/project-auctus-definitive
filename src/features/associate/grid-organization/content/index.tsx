import React from 'react'

import NewChallenges from './components/newSolutions'
import RegisterSolutions from './components/registerChallenges'

import { AsideContext } from '../../../../config/AsideContext'
import { Container } from './style'

interface ContentProps {
  selectedOption?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Content: React.FC<ContentProps> = ({ selectedOption }: ContentProps) => {
  const { state } = React.useContext(AsideContext)

  console.log(state)

  return (
        <Container>
            {state.selectedOption === 'option1' && <NewChallenges />}
            {state.selectedOption === 'option2' && <RegisterSolutions />}
        </Container>
  )
}

export default Content