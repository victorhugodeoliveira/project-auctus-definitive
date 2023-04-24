import React, { useEffect } from 'react'

import NewSolution from './components/newSolutions'
import RegisterChallenges from './components/registerChallenges'

import { AsideContext } from '../../../../config/AsideContext'
import { Container } from './style'
import Dashboard from './components/dashboard'
import Profile from './components/profile'

interface ContentProps {
  selectedOption?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Content: React.FC<ContentProps> = ({ selectedOption }: ContentProps) => {
  const { state } = React.useContext(AsideContext)

    useEffect(() => {
      state
    }, [state])
  console.log(state)

  return (
        <Container>
            {state.selectedOption === 'option1' && <Dashboard />}
            {state.selectedOption === 'option2' && <NewSolution />}
            {state.selectedOption === 'option3' && <RegisterChallenges />}
            {state.selectedOption === 'option4' && <Profile/>}
        </Container>
  )
}

export default Content