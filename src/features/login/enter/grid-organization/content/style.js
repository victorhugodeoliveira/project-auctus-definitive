import styled from 'styled-components'

import { AiFillCaretDown } from 'react-icons/ai'

export const Container = styled.div`
    grid-area: CT;
    max-width: 100px;
` 
export const DivContent = styled.div`
    position: relative;
    left: 300px;
    top: 250px;
`

export const TitleHead = styled.h3`
    position: relative;
    right: 90px;
    font-weight: 300;
    color: #444;
    bottom: 80px;
    max-width: 70px;
`
export const TitleHead2 = styled.h3`
    position: relative;
    right: 28px;
    font-weight: 400;
    bottom: 120px;
    max-width: 70px;
`

export const TitleCount = styled.h5`
    font-weight: 300;
    position: relative;
    right: 95px;
    bottom: 125px;
    max-width: 100px;
`

export const TitleRegister = styled.h5`
    font-weight: 300;
    position: relative;
    right: 167px;
    bottom: 130px; 
`

export const DivForm = styled.form`
    position: relative;
    bottom: 70px;
    left: 90px;
    display: flex;
    max-width: 50px;
`

export const InputRegister = styled.input`
    border: 1px solid #e1e1e1;
    font-weight: 300;
    position: relative;
    bottom: 100px;
    left: 50px;
    cursor: pointer;
`

export const LabelRegister = styled.label`
    margin-right: 90px;
`
export const TextLabel = styled.h6`
    font-weight: 300;
    max-height: 10px;
    max-width: 10px;
    position: relative;
    bottom: 122px;
    right: 10px;
`

export const DivDiv = styled.div`
    position: relative;
    bottom: 110px;
    border: 1px solid #e1e1e1;
    width:  90px;
    height: 20px;
    padding: 9px 9px;
    border-radius: 3px;
`

export const TextUserName = styled.h5`
    position: relative;
    right: 247px;    
    font-weight: 300;
    bottom: 80px;
`

export const InputUserName = styled.input`
    position: relative;
    right: 305px;    
    min-width: 215px;
    height: 15px;
    bottom: 35px;
    padding: 4px 4px;
`

export const TextEmail = styled.h5`
    position: relative;
    right: 530px;    
    font-weight: 300;
    bottom: 20px;
`

export const InputEmail = styled.input`
    position: relative;
    right: 565px;    
    min-width: 215px;
    height: 15px;
    top: 25px;
    padding: 4px 4px;
`
export const TextPassaword = styled.h5`
    position: relative;
    right: 790px;    
    font-weight: 300;
    top: 35px;

`

export const InputPassaword = styled.input`
    position: relative;
    right: 855px;    
    min-width: 215px;
    height: 15px;
    top: 80px;
    padding: 4px 4px;
`

export const TextRemeber = styled.h6`
    min-width: 80px;
    position: relative;
    right: 1060px;
    top: 103px;
    font-weight: 300;
`

export const RememberCheck = styled.input`
    position: relative;
    margin-top: 127px;
    right: 1165px;
    cursor: pointer;
`

export const ButtonSubmit = styled.button`
    position: relative;
    right: 1180px;
    top: 155px;
    height: 40px;
    min-width: 215px;
    color: #fff;
    background-color: #007fff;
    border-color: #007fff;

`

export const TitleEnd = styled.h6`
    position: relative;
    font-weight: 300;
    min-width: 100px;

`

export const IconTerms = styled(AiFillCaretDown)`
    position: relative;
    font-size: 0.9rem;
    color: #007fff;
`