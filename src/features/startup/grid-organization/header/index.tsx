import React, { useState } from 'react'
import { 
    Container,
    LogoHeader,
    HeaderLab,
    LogoContainer,
    IconsContainer,
    IconBell,
    IconComent,
    DivImg,
  } from './style';
import BoxNot from '../../../../components/boxNot';
import BoxComent from '../../../../components/boxComent';
import BoxProfile from '../../../../components/boxProfile';

const Header: React.FC = () => {

    const [openNot, setOpenNot] = useState(false)

    const handleOpenNot = () => {
        setOpenNot(!openNot);

        if (openNot == true) {
            openComent == false
        }
  
    }
    const [openComent, setOpenComent] = useState(false)

    const handleOpenComent = () => {
        setOpenComent(!openComent);
    }

    const [openProfile, setOpenProfile] = useState(false)

    const handleOpenProfile = () => {
        setOpenProfile(!openProfile);
    }


    return (
        <Container>
            <LogoContainer>
                <LogoHeader>auctus</LogoHeader><HeaderLab>LAB</HeaderLab>
            </LogoContainer>
            <IconsContainer>
                <DivImg onClick={() => handleOpenProfile()}></DivImg>
                <IconBell onClick={() => handleOpenNot()}></IconBell><IconComent onClick={() => handleOpenComent()}></IconComent>
                {openProfile == true && <BoxProfile/>}
                {openProfile == false && null}
                {openNot == true && <BoxNot/>}
                {openNot == false && null}
                {openComent == true && <BoxComent/>}
                {openComent == false && null}
            </IconsContainer>
        </Container>
    )
}

export default Header