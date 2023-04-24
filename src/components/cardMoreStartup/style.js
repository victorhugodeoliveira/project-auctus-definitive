import styled from 'styled-components';

import { AiFillCloseCircle } from 'react-icons/ai'

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
    right: 20%;
    bottom: 350px;
    width: 400px;
    height: 300px;
    border: 2px solid #444;
    border-radius: 5px;
    padding: 80px 20px;
    animation: go-back 1s;

@keyframes go-back {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
`
export const IconClose = styled(AiFillCloseCircle)`
    position: relative;
    bottom: 70px;
    left: 95%;
    color: #007fff;
    cursor: pointer;
`

export const NameProject = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 80px;
    color: #007fff;
`

export const TitleProject = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 120px;
    left: 130px;
`

export const NameCompany = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 120px;
    color: #007fff;
`

export const TitleCompany = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 158px;
    left: 140px;
`

export const Progress = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 160px;
    color: #007fff;
`

export const ProgressState = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 200px;
    left: 120px;
`

export const Culture = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 200px;
    color: #007fff;
`

export const CultureState = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 239px;
    left: 150px;
`
export const TypeSolution = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 240px;
    color: #007fff;
`

export const TypeSolutionState = styled.h4`
    font-weight: 300;
    position: relative;
    bottom: 279px;
    left: 120px;
`