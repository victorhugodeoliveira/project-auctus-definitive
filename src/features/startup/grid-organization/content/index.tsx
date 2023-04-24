import React, { useEffect } from 'react'

import NewChallenges from './components/newChallenges'
import RegisterSolutions from './components/registerSolutions'
import Dashboard from './components/dashboard'
import Profile from './components/profile'

import { AsideContext } from '../../../../config/AsideContext'
import { Container } from './style'

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
            {state.selectedOption === 'option2' && <NewChallenges />}
            {state.selectedOption === 'option3' && <RegisterSolutions />}
            {state.selectedOption === 'option4' && <Profile/>}
        </Container>
  )
}

export default Content