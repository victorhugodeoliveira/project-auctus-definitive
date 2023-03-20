import React from 'react'
import { 
    Container,
    LogoHeader,
    HeaderLab,
    LogoContainer,
    IconsContainer,
    IconBell,
    IconComent,
  } from './style';

const Header: React.FC = () => {
    return (
        <Container>
            <LogoContainer>
                <LogoHeader>auctus</LogoHeader><HeaderLab>LAB</HeaderLab>
            </LogoContainer>
            <IconsContainer>
                <IconBell></IconBell><IconComent></IconComent>
            </IconsContainer>
        </Container>
    )
}

export default Header