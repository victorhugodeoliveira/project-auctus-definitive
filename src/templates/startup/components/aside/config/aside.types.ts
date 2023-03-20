export interface AsideState {
    selectedOption: string;
  }
  
  export enum AsideActionType {
    SELECT_OPTION = 'SELECT_OPTION',
  }
  
  export interface SelectOptionAction {
    type: AsideActionType.SELECT_OPTION;
    payload: string;
  }
  
  export type AsideAction = SelectOptionAction;