import styled from 'styled-components';

import { BiBell } from 'react-icons/bi'
import { FaRegCommentDots } from 'react-icons/fa'

export const Container = styled.div`
   grid-area: MH;
   background:#fff ;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 10px;
   border-bottom: 1px solid #e1e1e1;
`;

export const LogoContainer = styled.div`
    position: absolute;
    display: inline-flex;
    left: 50px;
`
export const LogoHeader = styled.h3`
    position: relative;
    color: #444;
    top: 5px;
    transition: color 0.2s;
    font-size: 1.4rem;
    margin-right: 3px;
    font-weight: 300;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;



    &:hover {
        color: #007fff;

    }
`;

export const HeaderLab = styled.h2`
    position: relative;
    color: #444;
    top: 8px;
    transition: color 0.2s;
    font-size: 1.4rem;
    font-weight: 500;
`

export const IconsContainer = styled.div`
    position: absolute;
    right: 250px;
`
export const DivImg = styled.div`
    position: relative;
    left: 90px;
    top: 15px;
    width: 30px;
    height: 30px;
    background-color: #000;
    border-radius: 30px;
    transform: opacity .2s;
    cursor: pointer;
&:hover {
    opacity: .7;
}
`

export const IconBell = styled(BiBell)`
    position: relative;
    font-size: 1.4rem;
    color: #007fff;
    cursor: pointer;
    bottom: 10px;
    transform: opacity .2s;

&:hover {
    opacity: .7;
}
`

export const IconComent = styled(FaRegCommentDots)`
    position: relative;
    bottom: 10px;
    font-size: 1.4rem;
    color: #007fff;
    margin: 0px 25px;
    cursor: pointer;
    transform: opacity .2s;

&:hover {
    opacity: .7;
}
`
