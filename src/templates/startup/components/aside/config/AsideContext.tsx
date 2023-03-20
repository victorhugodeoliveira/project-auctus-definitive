import React, { createContext } from 'react'
import { AsideState, AsideAction } from './aside.types'

export interface AsideContextValue {
  state: AsideState;
  dispatch: React.Dispatch<AsideAction>;
}

export const AsideContext = createContext<AsideContextValue>({
  state: {
    selectedOption: ''
  },
  dispatch: () => {}
})