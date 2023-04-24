import styled from 'styled-components';

import { AiFillCaretRight } from 'react-icons/ai'

export const Container = styled.div`
    width: 100%;
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

export const TextHead = styled.h2`
    position: relative;
    bottom: 70px;
    font-size: 2.0rem;
    font-weight: 300;
    color: #007fff;

`

export const DivProjects = styled.div`
    position: relative;
    bottom: 170px;
    max-height: 100px;
`
export const DivContentChallenges = styled.div`
    position: relative;
    height: 150px;
    width: 450px;
    background-color: #eee;
    border-radius: 5px;
`
export const TitleChallengesChange = styled.h4`
    position: relative;
    font-weight: 300;
    top: 10px;
    margin-left: 20px;
    color: #007fff;
`

export const TitleChallenges = styled.h3`
    position: relative;
    font-weight: 300;
    color: #007fff;
    font-size: 1.6rem;
`
export const Project = styled.div`
    position: relative;
    border-radius: 3px;
    border-left:  1px solid #000;
    border-right:  1px solid #000;
    border-top: 1px solid #000;
    width: 448px;
    height: 20px;
`

export const NameProject = styled.h5`
    position: relative;
    bottom: 20px;
    font-weight: 300;
    margin-left: 20px;
    
`

export const IconProjectMore = styled(AiFillCaretRight)`
    position: relative;
    font-size: 1.2rem;
    color: #007fff;
    bottom: 60px;
    left: 165px;
    cursor: pointer;
`
export const DivDash = styled.div`
    position: relative;
    bottom: 50px;

`
export const DivContent = styled.div`
    position: relative;
    height: 150px;
    width: 350px;
    background-color: #eee;
    border-radius: 5px;
`

export const TitleYourSald = styled.h4`
    position: relative;
    font-weight: 400;
    top: 100px;
    left: 10px;
`
export const Sald = styled.h5`
    position: relative;
    bottom: 20px;
    font-weight: 300;
`
export const OngoingProjects = styled.h4`
    position: relative;
    font-weight: 400;
    left: 120px;
    top: 22px;
`
export const ProjectsProgress = styled.h5`
    position: relative;
    left: 130px;
    top: 3px;
    font-weight: 300;
`
export const DivImg = styled.div`
    position: relative;
    bottom: 140px;
    left: 10px;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
`
export const TitleUser = styled.h4`
    position: relative;
    bottom: 200px;
    left: 100px;
    font-weight: 400;
`
export const DivSald = styled.div`
    position: relative;
    left: 450px;
    bottom: 220px;

`
export const DivContentSald = styled.div`
    position: relative;
    height: 150px;
    width: 350px;
    background-color: #eee;
    border-radius: 5px;
`
export const FinanceTitle = styled.h4`
    position: relative;
    top: 20px;
    margin-left: 20px;
    font-weight: 400;
`
export const SaldAvailable = styled.h5`
    position: relative;
    font-weight: 300;
    top: 5px;
    margin-left: 20px;
`
export const Available = styled.h4`
    position: relative;
    left: 150px;
    bottom: 32px;
    font-weight: 300;
`

export const MethodSald = styled.h5`
    position: relative;
    bottom: 45px;
    font-weight: 300;
    margin-left: 20px;
`
export const Method = styled.h4`
    position: relative;
    bottom: 32px;
    left: 150px;
    font-weight: 300;
    color: #007fff;
`
export const ButtonSald = styled.button`
    position: relative;
    bottom: 80px;
    left: 20px;
    height: 40px;
    width: 130px;
    padding: 6px 6px;
    border-radius: 5px;
    border-color: #007fff;
    background-color: #007fff;
    color: #fff;
    cursor: pointer;
`