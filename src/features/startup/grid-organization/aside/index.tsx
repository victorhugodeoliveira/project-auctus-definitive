import React, { useReducer } from 'react'
import { Container, ListContainer, MenuItem,  } from './style';

import Content from '../content'
import { AsideActionType } from '../../../../config/aside.types'
import { asideReducer, initialState } from '../../../../config/aside.reducer'
import { AsideContext } from '../../../../config/AsideContext'


const Aside: React.FC = () => {

    const [state, dispatch] = useReducer(asideReducer, initialState)

  const handleSelectOption = (option: string) => {
    dispatch({ type: AsideActionType.SELECT_OPTION, payload: option })
  }

    return (
        <AsideContext.Provider value={{ state, dispatch }}>
        <Container>
        <ListContainer>
          <MenuItem onClick={() => handleSelectOption('option1')}>Dashboard</MenuItem>
          <MenuItem onClick={() => handleSelectOption('option2')}>Procurar novos desafios</MenuItem>
          <MenuItem onClick={() => handleSelectOption('option3')}>Cadastre soluções</MenuItem>
          <MenuItem onClick={() => handleSelectOption('option4')}>Documentação</MenuItem>
          <MenuItem onClick={() => handleSelectOption('option5')}>Fale conosco</MenuItem>
        </ListContainer>
        <Content selectedOption={state.selectedOption} />
        </Container>
        </AsideContext.Provider>
    )
}

export default Aside