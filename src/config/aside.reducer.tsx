import { AsideState, AsideActionType, AsideAction } from './aside.types'

export const initialState: AsideState = {
  selectedOption: 'option1'
}

export function asideReducer (state: AsideState, action: AsideAction): AsideState {
  switch (action.type) {
    case AsideActionType.SELECT_OPTION:
      return {
        ...state,
        selectedOption: action.payload
      }
    default:
      return state
  }
}