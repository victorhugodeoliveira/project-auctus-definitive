import styled from 'styled-components'
import { FcKey } from 'react-icons/fc';
import { TbArrowsLeftRight } from 'react-icons/tb'

export const Container = styled.div`
    animation: fadeIn 1s;
    @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`
export const TextProfile = styled.h2`
    color: #007fff;
    font-weight: 300;
    font-size: 2.0rem;
`
export const NameUser = styled.h4`
    position: relative;
    font-weight: 300;
`
export const NameUserInput = styled.input`
    position: relative;
    left: 135px;
    bottom: 40px;
`

export const Password = styled.h4`
    position: relative;
    bottom: 50px;
    font-weight: 300;
`
export const PasswordInput = styled.input`
    position: relative;
    left: 55px;
    bottom: 90px;
`
export const KeyPassword = styled(FcKey)`
    position: relative;
    bottom: 86px;
    left: 35px;
    cursor: pointer;
`

export const Email = styled.h4`
    position: relative;
    bottom: 100px;
    font-weight: 300;
`
export const EmailInput = styled.input`
    position: relative;
    left: 55px;
    bottom: 140px;
`
export const ImageReplace = styled.h4`
    position: relative;
    bottom: 140px;
    font-weight: 300;
`
export const ButtonReplace = styled.button`
    position: relative;
    bottom: 185px;
    left: 130px;
    width: 40px;
    height: 40px;
    padding: 7px 7px;
    border-radius: 105px;
    cursor: pointer;
`
export const IconReplace = styled(TbArrowsLeftRight)`
    position: relative;
    font-size: 1.2rem;
`