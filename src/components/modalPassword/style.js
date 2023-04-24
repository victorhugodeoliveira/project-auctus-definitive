import styled from 'styled-components'
import { BsEyeSlash } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'

export const Container = styled.div`
    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 50%;
    right: 50%;
`

export const BoxModal = styled.div`
    background-color: #ffff;
    z-index: 1;
    position: relative;
    bottom: 80px;
    left: 50px;
    width: 250px;
    height: 180px;
    border: 1px solid #444;
    padding: 10px 10px;
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
export const ChangePassword = styled.h5`
    font-weight: 300;
    position: relative;
    bottom: 25px;
    left: 80px;
    color: #007fff;
`
export const TitleOldPassword = styled.h5`
    font-weight: 300;
    position: relative;
    bottom: 45px;
`
export const InputOldPassword = styled.input`
    position: relative;
    bottom: 60px;
    width: 230px;
`

export const TitleNewPassword = styled.h5`
    font-weight: 300;
    position: relative;
    bottom: 75px;
`
export const InputNewPassword = styled.input`
    position: relative;
    bottom: 95px;
    width: 230px;
`

export const TitleConfirmPassword = styled.h5`
    font-weight: 300;
    position: relative;
    bottom: 110px;
`
export const InputConfirmPassword = styled.input`
    position: relative;
    bottom: 130px;
    width: 230px;
`
export const IconEyes = styled(BsEyeSlash)`
    position: relative;
    bottom: 240px;
    left: 215px;
    cursor: pointer;
`
export const IconClose = styled(AiFillCloseCircle)`
    position: relative;
    bottom: 280px;
    left: 220px;
    color: #007fff;
    cursor: pointer;
`
export const ButtonSubmit = styled.button`
    position: relative;
    bottom: 120px;
    left: 170px;
    width: 50px;
    background-color: #007fff;
    border-color: #007fff;
    border-radius: 2px;
    cursor: pointer;
`

export const Submit = styled(AiOutlineCheck)`
    position: relative;
    color: #fff
`
